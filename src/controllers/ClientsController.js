const db = require("../db");
const Clientes = require("../models/Cliente");

const Cliente = require("../models/Cliente");

module.exports={
    async index(req, res){

    },

    async login(req, res){
        const {email, senha } = req.body;
        const cliente = await Cliente.findOne({
            where:{ email, senha}
        });
        return res.json(cliente);

    },
    async register(req, res) {
        const cliente = await Cliente.create(req.body);
        return res.json(cliente);
    },

    async findOne(req, res){
        const {id} = req.query;

        const cliente = await Cliente.find({ where:{codigo:id} });
        return res.json(cliente);
    }
}