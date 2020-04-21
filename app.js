const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const rotaClientes = require("./routes/clientes");
const rotaClientesFieis = require("./routes/clientesFieis");
const rotaHistorico = require("./routes/historico");
const rotaMaiorCompraAno = require("./routes/maiorCompraAno");
const rotaMaioresCompras = require("./routes/maioresCompras");
const rotaRecomendacoes = require("./routes/recomendacoes");
const rotaVinhos = require("./routes/vinhos");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Habilitando o CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Header", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods', "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).send({});
    }
    next();
});

app.use("/clientes", rotaClientes); 
app.use("/clientesFieis", rotaClientesFieis); 
app.use("/historico", rotaHistorico);
app.use("/maiorCompraAno", rotaMaiorCompraAno); 
app.use("/maioresCompras", rotaMaioresCompras); 
app.use("/recomendacoes", rotaRecomendacoes); 
app.use("/vinhos", rotaVinhos);  

//Rota não encontrada
app.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {   
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;