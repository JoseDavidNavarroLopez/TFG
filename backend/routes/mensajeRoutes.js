const express = require("express");
const router = express.Router();
const { guardarMensaje } = require("../controllers/guardarMensajeYConversacion");

router.post("/", guardarMensaje); 

module.exports = router;

