"use strict";

const express = require('express');
const router = express.Router();
const conferenceController = require('../controllers/conferenceController');

router.get('/', conferenceController.index);

router.get('/lobby', conferenceController.lobby);

router.get('/servererror', conferenceController.serverError);

router.use('/', conferenceController.pageNotFoundError);

module.exports = router;
