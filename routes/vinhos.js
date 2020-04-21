const express = require("express");
const router = express.Router();
const vinhos = require("./../files/vinhos.json")

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "Vinhos cadastrados",
        vinhos: vinhos
    });
})

module.exports = router;