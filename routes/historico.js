const express = require("express");
const router = express.Router();
const historico = require("./../files/historico.json")

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Histórico de clientes",
        historicoCompra: historico
    });
})

module.exports = router;