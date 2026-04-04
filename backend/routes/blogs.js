const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');
const { protect } = require('../middleware/auth');

router.get('/',       getAllBlogs);   // sabko dikh sakta hai
router.get('/:id',    getBlogById);  // sabko dikh sakta hai
router.post('/',      protect, createBlog);   // sirf logged in
router.put('/:id',    protect, updateBlog);   // sirf logged in
router.delete('/:id', protect, deleteBlog);   // sirf logged in

module.exports = router;