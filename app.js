const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
require('./config/passport')(passport);


// Connect To Database
// mongoose.Promise = require('bluebird');
// mongoose.connect(config.database, { useMongoClient: true, promiseLibrary: require('bluebird') })
//   .then(() => console.log(`Connected to database ${config.database}`))
//   .catch((err) => console.log(`Database error: ${err}`));

mongoose.connect(config.dbUrl);

const app = express();

const users = require('./routes/users');
// const admin = require('./routes/admin');
const videos = require('./routes/video');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
// app.use(passport.session());


app.use('/users', users);
// app.use('/admin', admin);
app.use('/videos', videos);

// Index Routes
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
