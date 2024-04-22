require("dotenv").config();
const express = require("express");
const router = express.Router();

const controller = require("../controllers");
router.get("/", (req, res) => {
  res.redirect(process.env.HOST_REDIRECT);
});
router.get("/status", (req, res) => {
  var IP = req.ip;
  var LOCAL_IP = req.socket.localAddress;

  res.json({
    status: process.env.DEBUG === "true" ? "development" : "production",
    ka_host: process.env.KIRIMINAJA_HOST,
    port: process.env.PORT,
    ip: IP,
    local_address: LOCAL_IP,
    connected: true,
  });
});
//coverage area
router.post("/coveragearea/provinces", controller.coveragearea.province);
router.post("/coveragearea/cities", controller.coveragearea.city);
router.post("/coveragearea/district", controller.coveragearea.district);
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
//last
router.post("/checkcost/express", controller.checkcost.express);
router.post("/checkcost/instant", controller.checkcost.instant);
router.post("/schedules", controller.schedules);
router.post("/pickup/express", controller.pickup.express);
router.post("/pickup/instant", controller.pickup.instant);
router.post("/tracking/express", controller.tracking.express);
router.post("/void/express", controller.void.express);
router.post("/void/instant", controller.void.instant);

module.exports = router;
