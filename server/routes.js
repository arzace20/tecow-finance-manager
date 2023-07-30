const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');

router.get('/example', async (req, res) => {
  try {
    const db = await connectToDatabase();
    // Use the `db` object to interact with your MongoDB collections
    const collection = db.collection('your-collection-name');
    const documents = await collection.find({}).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error retrieving data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
