const express = require('express');
const path = require('path');
const moment = require('moment');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../app/build'")));

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:Word0965@cluster0.pmmdn.mongodb.net/Church?retryWrites=true&w=majority', { useNewUrlParser: true });

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
    const deposits = await Deposit.find();
    console.log(deposits);
    const reportData = [];
    for (const deposit of deposits) {
      const member = await Deposit.findOne({ memberId: deposit.memberId });
      const weekly = deposit.offerings.find(o => o.type === 'weekly')?.amount || 0;
      const tithe = deposit.offerings.find(o => o.type === 'tithe')?.amount || 0;
      const special = deposit.offerings.find(o => o.type === 'special')?.amount || 0;
      const building = deposit.offerings.find(o => o.type === 'building')?.amount || 0;
      const misc = deposit.offerings.find(o => o.type === 'misc')?.amount || 0;
      const total = weekly + tithe + special + building + misc;
      reportData.push({
        memberId: member.memberId,
        weekly,
        tithe,
        special,
        building,
        misc,
        total
      });
    }
    res.send(reportData);
  } catch (err) {
    console.error('Error fetching report data:', err);
    res.status(500).send('Error fetching report data');
  }
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../app/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});