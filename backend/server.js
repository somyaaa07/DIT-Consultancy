const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/database');

require('./models/index');

const app = express();

// ✅ Sabko allow karo
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/auth',         require('./routes/auth'));
app.use('/api/jobs',         require('./routes/jobs'));
app.use('/api/companies',    require('./routes/companies'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/blogs',        require('./routes/blogs'));
app.use('/api/enquiries',    require('./routes/enquiries'));

app.get('/', (req, res) => {
  res.json({ message: '🚀 Job Portal API chal raha hai!' });
});

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server: ${PORT}`);
  });
};

start();