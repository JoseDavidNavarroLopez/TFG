const express = require("express");
const router = express.Router();
const {
  obtenerConfiguraciones,
  crearOActualizarConfiguracion,
  eliminarConfiguracion
} = require("../controllers/configController");

router.get("/", obtenerConfiguraciones);
router.post("/", crearOActualizarConfiguracion);
router.delete("/:id", eliminarConfiguracion);

module.exports = router;
