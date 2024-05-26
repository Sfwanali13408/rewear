const cors = require('cors');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');
require('./database'); // Import the database connection

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: '*', // Allow any HTTP methods
  allowedHeaders: '*', // Allow any headers
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the auth routes
app.use('/api', authRoutes);

// Register error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
