const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../app/build'")));

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/church', { useNewUrlParser: true });

const churchSchema = new mongoose.Schema({
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

const Church = mongoose.model('Church', churchSchema);

app.post('/submit', (req, res) => {
  const { memberId, date, weekly, tithe, special, buildingFund, misc } = req.body;
  
  Church.findOneAndUpdate(
    { memberId },
    { $push: { offerings: { date, weekly, tithe, special, buildingFund, misc } } },
    { upsert: true },
    (err, church) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(church);
      }
    }
  );
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!"});
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listning on ${PORT}`);
});