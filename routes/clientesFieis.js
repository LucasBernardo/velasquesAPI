const express = require("express");
const router = express.Router();
const historico = require("./../files/historico.json");

let clientesAno = historico.filter(compra => compra.data.includes("2016"))
let clientesCompras = clientesAno.sort((a,b) => b.valorTotal - a.valorTotal);
let rkClientes = [...new Set(clientesCompras.map(x => x.cliente))]
let clientesFieis = rkClientes.slice(0,5)

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "5 clientes com mais compras no último ano (2016)",
        clientes: clientesFieis
    });
})

module.exports = router;