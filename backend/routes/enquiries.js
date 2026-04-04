const express = require('express');
const router = express.Router();
const {
  createEnquiry,
  getAllEnquiries,
  updateEnquiryStatus
} = require('../controllers/enquiryController');
const { protect, employerOnly } = require('../middleware/auth');

router.post('/',          createEnquiry);                           // Public
router.get('/',           protect, employerOnly, getAllEnquiries);  // Sirf employer
router.put('/:id/status', protect, employerOnly, updateEnquiryStatus);

module.exports = router;