const express = require("express");
const router = express.Router();
const controllers = require('../controllers/professeurCtr');

router.post("/", controllers.postProfesseur);
module.exports = router;