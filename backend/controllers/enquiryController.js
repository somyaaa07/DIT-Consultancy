const { Enquiry } = require('../models');
const { sendEnquiryNotification, sendEnquiryConfirmation } = require('../config/email');

// ✅ Enquiry submit karo
exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, company, type, message } = req.body;

    if (!name || !email || !type || !message) {
      return res.status(400).json({ message: 'Name, email, type and message are required' });
    }

    // Database mein save karo
    const enquiry = await Enquiry.create({ name, email, phone, company, type, message });

    // Dono mails bhejo simultaneously
    await Promise.all([
      sendEnquiryNotification(enquiry), // Admin ko
      sendEnquiryConfirmation(enquiry)  // User ko
    ]);

    res.status(201).json({
      message: 'Your message has been received! We will get back to you within 1 business day.',
      enquiry
    });
  } catch (err) {
    console.error('Email error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// ✅ Saari enquiries
exports.getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json({ total: enquiries.length, enquiries });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Status update
exports.updateEnquiryStatus = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByPk(req.params.id);
    if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });
    await enquiry.update({ status: req.body.status });
    res.json({ message: 'Status updated!', enquiry });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};