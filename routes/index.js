require("dotenv").config();
const express = require("express");
const router = express.Router();

const controller = require("../controllers");
router.get("/", (req, res) => {
  res.redirect(process.env.HOST_REDIRECT);
});
//coverage area
router.post("/coveragearea/provinces", controller.coveragearea.province);
router.post("/coveragearea/cities", controller.coveragearea.city);
router.post("/coveragearea/district", controller.coveragearea.district);
router.post("/coveragearea/subdistrict", controller.coveragearea.subdistrict);
router.post("/coveragearea/search", controller.coveragearea.search);
//express
router.post("/express/schedules", controller.express.schedule);
router.post("/express/pricing", controller.express.pricing);
router.post("/express/pickup/request", controller.express.pickup);
router.post("/express/tracking", controller.express.tracking);
router.post("/express/void", controller.express.void);
//instant
router.post("/instant/pricing", controller.instant.pricing);
router.post("/instant/pickup/request", controller.instant.pickup);
router.post("/instant/tracking", controller.instant.tracking);
router.post("/instant/find_driver", controller.instant.find_driver);
router.post("/instant/void", controller.instant.void);
//set-callback
router.post("/set_callback", controller.set_callback);

module.exports = router;
