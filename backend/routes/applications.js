const express = require('express');
const router = express.Router();
const { applyJob, myApplications, getJobApplicants, updateStatus } = require('../controllers/applicationController');
const { protect, employerOnly } = require('../middleware/auth');

router.post('/',                    protect, applyJob);
router.get('/my',                   protect, myApplications);
router.get('/job/:jobId',           protect, employerOnly, getJobApplicants);
router.put('/:id/status',           protect, employerOnly, updateStatus);

module.exports = router;