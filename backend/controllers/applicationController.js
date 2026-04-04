const { Application, Job, User, Company } = require('../models');

// ✅ APPLY KARO
exports.applyJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.body.job_id);
    if (!job || job.status !== 'active') {
      return res.status(400).json({ message: 'Ye job available nahi hai' });
    }
    const already = await Application.findOne({
      where: { job_id: req.body.job_id, user_id: req.user.id }
    });
    if (already) return res.status(400).json({ message: 'Aap pehle se apply kar chuke ho' });

    const application = await Application.create({
      job_id:       req.body.job_id,
      user_id:      req.user.id,
      cover_letter: req.body.cover_letter
    });
    res.status(201).json({ message: 'Apply ho gaya! 🎉', application });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ MERI APPLICATIONS (jobseeker)
exports.myApplications = async (req, res) => {
  try {
    const applications = await Application.findAll({
      where: { user_id: req.user.id },
      include: [{
        model: Job,
        include: [{ model: Company, attributes: ['name', 'city'] }]
      }],
      order: [['createdAt', 'DESC']]
    });
    res.json({ applications });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ JOB KE APPLICANTS (employer)
exports.getJobApplicants = async (req, res) => {
  try {
    const job = await Job.findOne({
      where: { id: req.params.jobId, posted_by: req.user.id }
    });
    if (!job) return res.status(403).json({ message: 'Permission nahi hai' });

    const applications = await Application.findAll({
      where: { job_id: req.params.jobId },
      include: [{
        model: User,
        as: 'applicant',   // ← models/index.js se match karna chahiye
        attributes: ['id', 'name', 'email', 'phone', 'skills', 'experience_years', 'location']
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json({ total: applications.length, applications });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ STATUS UPDATE
exports.updateStatus = async (req, res) => {
  try {
    const app = await Application.findByPk(req.params.id);
    if (!app) return res.status(404).json({ message: 'Application nahi mili' });
    await app.update({ status: req.body.status });
    res.json({ message: 'Status update ho gaya!', application: app });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};