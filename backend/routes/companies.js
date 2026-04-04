const express = require('express');
const router = express.Router();
const {
  createCompany,
  getAllCompanies,
  getCompanyById,
  getMyCompany          // ← YE ADD KARO
} = require('../controllers/companyController');
const { protect, employerOnly } = require('../middleware/auth');

router.get('/',        getAllCompanies);
router.get('/mine',    protect, employerOnly, getMyCompany);  // ← pehle
router.get('/:id',     getCompanyById);
router.post('/',       protect, employerOnly, createCompany);

module.exports = router;