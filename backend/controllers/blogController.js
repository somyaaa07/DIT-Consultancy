const { Blog } = require('../models');
const { Op } = require('sequelize');

// ✅ SAARE BLOGS
exports.getAllBlogs = async (req, res) => {
  try {
    const { category, search } = req.query;
    const where = { is_published: true };

    if (category) where.category = category;
    if (search) {
      where[Op.or] = [
        { title:   { [Op.like]: `%${search}%` } },
        { excerpt: { [Op.like]: `%${search}%` } }
      ];
    }

    const blogs = await Blog.findAll({
      where,
      attributes: ['id', 'title', 'excerpt', 'image', 'author', 'category', 'createdAt'],
      order: [['createdAt', 'DESC']]
    });

    res.json({ blogs });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ EK BLOG KI DETAIL
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      where: { id: req.params.id, is_published: true }
    });
    if (!blog) return res.status(404).json({ message: 'Blog nahi mila' });
    res.json({ blog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ BLOG BANAO (sirf admin/postman se)
exports.createBlog = async (req, res) => {
  try {
    const { title, content, excerpt, image, author, category } = req.body;
    const blog = await Blog.create({ title, content, excerpt, image, author, category });
    res.status(201).json({ message: 'Blog ban gaya!', blog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ BLOG UPDATE KARO
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog nahi mila' });
    await blog.update(req.body);
    res.json({ message: 'Blog update ho gaya!', blog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ BLOG DELETE KARO
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog nahi mila' });
    await blog.destroy();
    res.json({ message: 'Blog delete ho gaya!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};