const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Admin = require('../helper/admin/adminhelper');
const AdminModel = require('../models/admin');

//admin
router.post('admin',(req, res, next)=>{

    let newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
});

// module.exports = 