const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todos');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3500;

// Middleware
app.use(cors({
    origin: 'https://master--todolistfrontpage.netlify.app',
}));
app.use(express.json());

// Routes
app.use('/items', todoRoutes);

// MongoDB Connection
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
