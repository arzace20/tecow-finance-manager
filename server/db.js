const { MongoClient } = require('mongodb');

// Replace the connection string with your MongoDB connection string
const connectionString = 'mongodb+srv://admin:Word0965@cluster0.pmmdn.mongodb.net/Church?retryWrites=true&w=majority';

async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return client.db(); // Returns the database object
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
}

module.exports = connectToDatabase;