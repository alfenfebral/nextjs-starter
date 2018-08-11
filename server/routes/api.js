const express = require('express');
const router = express.Router();

const ApiBlogControllers = require('../controllers/ApiBlogControllers');

router.get('/blog', ApiBlogControllers.index);

module.exports = router;
