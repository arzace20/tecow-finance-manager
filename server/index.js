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
  
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

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



const User = mongoose.model('User', userSchema);

const session = require('express-session');
const bcrypt = require('bcrypt');

app.use(
  session({
    secret: '21006356',
    resave: true,
    saveUninitialized: true
  })
);

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
      // Successful login
      req.session.user = user; // Store user data in the session
      res.redirect('/dashboard'); // Redirect to the dashboard page
    } else {
      // Invalid credentials
      res.status(401).send('Invalid login credentials');
    }
  } catch (error) {
    res.status(500).send('An error occurred');
  }
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(200).send('User registered successfully');
  } catch (error) {
    res.status(500).send('An error occurred');
  }
});


function requireLogin(req, res, next) {
  if (req.session.user) {
    next(); // User is authenticated, proceed to the next middleware/route
  } else {
    res.redirect('/login'); // Redirect to the login page if not authenticated
  }
}

app.get('/dashboard', requireLogin, (req, res) => {
  // Render the dashboard page for authenticated users
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