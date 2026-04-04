const express = require('express');
const router = express.Router();
const {
  getAllJobs,
  getMyJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob
} = require('../controllers/jobController');
const { protect, employerOnly } = require('../middleware/auth');

router.get('/',       getAllJobs);
router.get('/mine',   protect, employerOnly, getMyJobs); // ← Employer ki apni jobs
router.get('/:id',    getJobById);
router.post('/',      protect, employerOnly, createJob);
router.put('/:id',    protect, employerOnly, updateJob);
router.delete('/:id', protect, employerOnly, deleteJob);

module.exports = router;