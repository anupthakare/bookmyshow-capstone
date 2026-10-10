const {
  addTheatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatre,
  getTheatreByOnwer,
} = require("../controllers/theatreController.js");

const router = require("express").Router();

router.get("/get-all", getAllTheatre);

router.post("/add", addTheatre);
router.post("/get-all-theatre-by-owner", getTheatreByOnwer);

router.put("/update", updateTheatre);
router.put("/delete", deleteTheatre);

module.exports = router;