const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const path=require('path');

// Register User
router.post('/register', (req, res) => { //the data has come into the req by post 
    console.log(req.body);
    const { name, email, dateOfBirth, password } = req.body; //destructuring of data
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    db.query('INSERT INTO users (name, email, dateOfBirth, password) VALUES (?, ?, ?, ?)', 
    [name, email, dateOfBirth, hashedPassword], (err, results) => {
        if (err) return res.status(500).send('Server error');
        res.status(200).send('User registered successfully');
        if(results){
            console.log(results);
            res.redirect('/login');
        }
    });
});

// Login User
router.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','login.html'))
})

router.post('/login',(req,res)=>{
    console.log(req.body);
})

module.exports = router;
