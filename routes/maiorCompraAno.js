const express = require("express");
const router = express.Router();
const historico = require("./../files/historico.json")

let valuesAnuais = historico.filter(compra => compra.data.includes("2016"))
let maiorValor = Math.max.apply(Math, valuesAnuais.map(function(c) { return c.valorTotal; }))
let maiorCompra = valuesAnuais.filter(compra => compra.valorTotal == maiorValor)

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Maior Compra do ano",
        result: maiorCompra
    });
})

module.exports = router;