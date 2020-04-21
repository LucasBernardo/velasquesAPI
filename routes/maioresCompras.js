const express = require("express");
const router = express.Router();
const historico = require("./../files/historico.json")

let maioresCompras = historico.sort((a,b) => b.valorTotal - a.valorTotal);

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Maiores compras",
        compras: maioresCompras
    });
})

module.exports = router;