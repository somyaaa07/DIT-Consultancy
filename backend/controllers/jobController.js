const { Job, Company, User, Application } = require('../models');
const { Op } = require('sequelize');

// ✅ SAARI JOBS (with search & filter) — Home page ke liye
exports.getAllJobs = async (req, res) => {
  try {
    const { search, category, job_type, location, page = 1, limit = 10 } = req.query;
    const where = { status: 'active' };

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } }
      ];
    }
    if (category) where.category = category;
    if (job_type)  where.job_type = job_type;
    if (location)  where.location = { [Op.like]: `%${location}%` };

    const offset = (page - 1) * limit;

    const { count, rows } = await Job.findAndCountAll({
      where,
      include: [{ model: Company, as: 'company', attributes: ['id', 'name', 'city'] }],
      order: [['createdAt', 'DESC']],
      limit: parseInt(limit),
      offset
    });

    res.json({
      total: count,
      pages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      jobs: rows
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ SIRF MERI JOBS — Employer Dashboard ke liye
exports.getMyJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll({
      where: { posted_by: req.user.id }, // ← sirf current employer ki jobs
      include: [{ model: Company, as: 'company', attributes: ['id', 'name', 'city'] }],
      order: [['createdAt', 'DESC']]
    });
    res.json({ jobs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ EK JOB KI DETAIL
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id, {
      include: [{ model: Company, as: 'company' }]
    });
    if (!job) return res.status(404).json({ message: 'Job nahi mili' });
    res.json({ job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ JOB POST KARO (sirf employer)
exports.createJob = async (req, res) => {
  try {
    const company = await Company.findOne({ where: { owner_id: req.user.id } });
    if (!company) return res.status(400).json({ message: 'Pehle apni company banao' });

    const job = await Job.create({
      ...req.body,
      company_id: company.id,
      posted_by: req.user.id
    });

    res.status(201).json({ message: 'Job post ho gayi!', job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ JOB UPDATE KARO
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findOne({
      where: { id: req.params.id, posted_by: req.user.id }
    });
    if (!job) return res.status(404).json({ message: 'Job nahi mili ya permission nahi' });

    await job.update(req.body);
    res.json({ message: 'Job update ho gayi!', job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ JOB DELETE KARO
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOne({
      where: { id: req.params.id, posted_by: req.user.id }
    });
    if (!job) return res.status(404).json({ message: 'Job nahi mili ya permission nahi' });

    await job.destroy();
    res.json({ message: 'Job delete ho gayi!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};