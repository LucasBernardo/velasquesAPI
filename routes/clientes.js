const express = require("express");
const router = express.Router();
const clientes = require("./../files/clientes.json")

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Clientes cadastrados",
        clientes: clientes
    });
})

module.exports = router;