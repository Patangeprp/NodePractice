const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Register User
router.post('/register', (req, res) => {
    console.log(req.body);
    const { name, email, dateOfBirth, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    db.query('INSERT INTO users (name, email, dateOfBirth, password) VALUES (?, ?, ?, ?)', 
    [name, email, dateOfBirth, hashedPassword], (err, results) => {
        if (err) return res.status(500).send('Server error');
        res.status(200).send('User registered successfully');
    });
});

// Login User
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).send('Server error');
        if (results.length === 0) return res.status(404).send('User not found');

        const user = results[0];
        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) return res.status(401).send('Invalid password');

        const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
        res.status(200).send({ auth: true, token });
    });
});

module.exports = router;
