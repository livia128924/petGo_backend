const {Router} = require('express');
// const ProdutosServicosController = require('./controllers/ProdutosServicosController');
const ClientsController = require("./controllers/ClientsController");
// const VendasController = require('./controllers/VendasController');


const routes = Router();

routes.get("/", (req, res) => {
    return res.send("Inicio");
});


routes.post("/login", ClientsController.login);
routes.get("/cadastrar", ClientsController.register);

routes.get("/register-client", ClientsController.register);


module.exports = routes;