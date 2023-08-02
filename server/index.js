const express = require('express');
const path = require('path');
const moment = require('moment');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../app/build'")));

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
mongoose.connect('mongodb+srv://admin:Word0965@cluster0.pmmdn.mongodb.net/Church?retryWrites=true&w=majority', { useNewUrlParser: true  });
  


const depositSchema = new mongoose.Schema({
  memberId: Number,
  memberName: String,
  offerings: [
    {
      date: Date,
      weekly: Number,
      tithe: Number,
      special: Number,
      buildingFund: Number,
      misc: Number
    }
  ]
});

const Deposit = mongoose.model('Deposit', depositSchema);

app.post('/submit', async (req, res) => {
  const { memberId, date, weekly, tithe, special, buildingFund, misc } = req.body;
  
  try {
    let deposit = await Deposit.findOneAndUpdate(
      { memberId },
      { $push: { offerings: { date, weekly, tithe, special, buildingFund, misc } } },
      { upsert: true }
    );

    res.status(200).send(deposit);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.get('/report', async (req, res) => {
  try {
    const reportData = await Deposit.aggregate([
      {
        $group: {
          "_id": "$memberId",
          "weekly": {
            "$sum": "$offerings.weekly"
          },
          "tithe": {
            "$sum": "$offerings.tithe"
          },
          "special": {
            "$sum": "$offerings.special"
          },
          "buildingFund": {
            "$sum": "$offerings.buildingFund"
          },
          "misc": {
            "$sum": "$offerings.misc"
          }
        }
      }
    ]);

    console.log(reportData); // Log the fetched data to the console

    res.json(reportData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});