const express = require("express");
const emotionsController = require("./../controllers/emotionsController");

const router = express.Router();

router.route("/").get(emotionsController.getAllEmotions);
router.route("/:emotion").get(emotionsController.getEmotion);

module.exports = router;
