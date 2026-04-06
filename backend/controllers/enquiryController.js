const { Enquiry } = require('../models');
const { sendEnquiryNotification, sendEnquiryConfirmation } = require('../config/email');

exports.createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, company, type, message } = req.body;

    if (!name || !email || !type || !message) {
      return res.status(400).json({ 
        message: 'Name, email, type and message are required' 
      });
    }

    // ✅ Pehle database mein save karo
    const enquiry = await Enquiry.create({ 
      name, email, phone, company, type, message 
    });

    // ✅ Turant response bhejo — mail ka wait mat karo
    res.status(201).json({
      message: 'Your message has been received! We will get back to you within 1 business day.',
      enquiry
    });

    // ✅ Mail baad mein background mein bhejo
    // Response ke baad — user ko wait nahi karna padega
    sendEnquiryNotification(enquiry).catch(err => 
      console.error('Admin mail error:', err.message)
    );
    sendEnquiryConfirmation(enquiry).catch(err => 
      console.error('User mail error:', err.message)
    );

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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