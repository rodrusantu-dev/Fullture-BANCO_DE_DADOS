//*** BLOCO PADRÃO DE CONFIGURAÇÃO COM O BANCO DE DADOS (NODE): ***
const express = require('express');
require('dotenv').config();
const mongo = require('./config/mongo');
const server = express();
server.use(express.json());


// BLOCO DAS --TRANSAÇÕES--:
server.get('/mongo/transacoes', async ( req, res ) => {
    try {
        const db = await mongo();
        const transactions = await db.collection('transacoes').find({}).toArray()
        return res.status(201).json(transactions)
    } catch (e) {
        console.log (e)
        return res.status(400).json({error: "Não deu certo"})
    }
    })





server.listen(3000);