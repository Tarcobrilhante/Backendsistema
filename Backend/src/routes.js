const express = require("express");
const routes = express.Router();
const clienteController = require('./controllers/ClienteControllers')
const produtoController = require('./controllers/ProdutoControllers');
const vendaController = require('./controllers/VendaController');

//rotas de cliente
routes.get('/cliente/busca/:id', clienteController.buscar)
routes.get('/cliente/listar', clienteController.listar)
routes.post('/cliente/cadastro', clienteController.cadastrar)
routes.delete('/cliente/apagar/:id', clienteController.apagar)
routes.put('/cliente/atualizar/:id', clienteController.atualizar)

//Rotas de produto
routes.post('/produto/cadastro', produtoController.cadastrar)
routes.get('/produto/listar', produtoController.listar)
routes.put('/produto/atualizar/:id', produtoController.atualizar)
routes.get('/produto/busca/:id', produtoController.buscar)
routes.delete('/produto/apagar/:id', produtoController.apagar)


//Rotas de vendas
routes.post('/venda/cadastro', vendaController.cadastrar)
routes.get('/venda/busca/:id', vendaController.buscar)
routes.get('/venda/listar', vendaController.listar)
routes.delete('/venda/apagar/:id', vendaController.apagar) 

module.exports = routes;
           

//PUT: atualizar informações
//DELETE: apagar informações
//GET: busca informações
//POST: enviar informações

//Query params: parametros de busca -> utilizados para fazer buscar, filtros, paginação
//Route params: parametros de rota -> utilizados para identificação, busca especifica, apagar registros, etc
//Body params: parametros do corpo -> utilizados para passar dados para cadastro, atualização, etc.