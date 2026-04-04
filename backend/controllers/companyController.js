const { Company, Job } = require('../models');

// ✅ COMPANY BANAO
exports.createCompany = async (req, res) => {
  try {
    const exists = await Company.findOne({ where: { owner_id: req.user.id } });
    if (exists) return res.status(400).json({ message: 'Aapki company already hai' });

    const company = await Company.create({ ...req.body, owner_id: req.user.id });
    res.status(201).json({ message: 'Company ban gayi!', company });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ SIRF MERI COMPANY (logged in employer ki) ← YE ADD KARO
exports.getMyCompany = async (req, res) => {
  try {
    const company = await Company.findOne({
      where: { owner_id: req.user.id } // ← current user ki company
    });
    res.json({ company }); // null aayega agar company nahi bani
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ SAARI COMPANIES
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: [{ model: Job, attributes: ['id', 'title', 'status'] }]
    });
    res.json({ companies });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ EK COMPANY KI DETAIL
exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id, {
      include: [{ model: Job, attributes: ['id', 'title', 'job_type', 'location', 'status'] }]
    });
    if (!company) return res.status(404).json({ message: 'Company nahi mili' });
    res.json({ company });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};