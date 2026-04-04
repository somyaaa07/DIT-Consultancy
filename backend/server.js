const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/database');

require('./models/index');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth',         require('./routes/auth'));
app.use('/api/jobs',         require('./routes/jobs'));
app.use('/api/companies',    require('./routes/companies'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/blogs',        require('./routes/blogs'));
app.use('/api/enquiries',    require('./routes/enquiries')); // ← YE ADD KARO

app.get('/', (req, res) => {
  res.json({ message: '🚀 Job Portal API chal raha hai!' });
});

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running at port : http://localhost:${PORT}`);
  });
};

start();