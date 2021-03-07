const express = require('express');
const {
  getBoeing,
  getAirbus,
  getMd,
  getEmbraer,
  getAntonov,
  getTupolev,
  getIlyushin
} = require('./../controllers/aircraftsController');
const router = express.Router();

router.route('/boeing').get(getBoeing);
/*
router.route('/airbus').get(getAirbus);
router.route('/md').get(getMd);
router.route('/embraer').get(getEmbraer);
router.route('/antonov').get(getAntonov);
router.route('/tupolev').get(getTupolev);
route.route('/ilyushin').get(getIlyushin);
*/

module.exports = router;