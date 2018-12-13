const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const VideoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  runtime: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  }
});

 const Video = mongoose.model('Video', VideoSchema);

 module.exports = Video;


