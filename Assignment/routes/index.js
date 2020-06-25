'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('Home', { title: 'Home Page' });
});
router.get('/About', function (req, res) {
    res.render('About', { title: 'About Me' });
});
router.get('/Projects', function (req, res) {
    res.render('Projects', { title: 'My Projets' });
});
router.get('/Services', function (req, res) {
    res.render('Services', { title: 'Services' });
});
router.get('/Contact', function (req, res) {
    res.render('Contact', { title: 'Contact Me' });
});
module.exports = router;
