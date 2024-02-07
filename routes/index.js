const express = require('express');
const router = express.Router();

const controller = require('../controllers');

router.post('/coveragearea/provinces', controller.coveragearea.province);
router.post('/coveragearea/cities', controller.coveragearea.city);
router.post('/coveragearea/district', controller.coveragearea.district);
router.post('/checkcost/express', controller.checkcost.express);
router.post('/checkcost/instant', controller.checkcost.instant);
router.post('/schedules', controller.schedules);
router.post('/pickup/express', controller.pickup.express);
router.post('/pickup/instant', controller.pickup.instant);
router.post('/tracking/express', controller.tracking.express);
router.post('/void/express', controller.void.express);
router.post('/void/instant', controller.void.instant);

module.exports = router;
