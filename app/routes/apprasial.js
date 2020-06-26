const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const appraisals = require('../controllers/appraisal.controller');

router.post('/appr',appraisals.startQ);

module.exports = router;