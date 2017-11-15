const express = require("express");
const router = express.Router();
const Places = require("../models/place");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

router.post("/", (req, res, next) => {
  // Get Params from POST
  const location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  };




  const newLocation = Places({
    location: location
  });




  newLocation.save(error => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;