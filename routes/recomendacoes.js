const express = require("express");
const router = express.Router();
const historico = require("./../files/historico.json");
const vinhos = require("./../files/vinhos.json")

router.get("/:cpf", (req, res, next) => {
    let cpfUser = req.params.cpf;
    let rec = buscaRecomendacoes(cpfUser);

    res.status(200).send({
        mensagem: "Recomendações ao usuário",
        result: rec
    });
})

function buscaRecomendacoes(cpf){
    let comprasUser = historico.filter(compra => compra.cliente.includes(cpf))
    let itensComprados = comprasUser.map(i => i.itens.map(c => c.categoria))
    let valoresTotais = [...new Set([].concat(...itensComprados))]
    let recomendacoes = vinhos.filter(vinho => vinho.categoria == valoresTotais[0])
 
    return recomendacoes;
}

module.exports = router;