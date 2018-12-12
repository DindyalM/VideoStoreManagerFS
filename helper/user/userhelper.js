const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');
var exports = module.exports = {};

  exports.getUserById = function(id, callback){
    User.findById(id, callback);
  }
  
  exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
  }
  
  exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }
  
  exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }

  return module.exports;

