/* Crie 3 rotas com express, uma index, uma sobre mim e outra sobre contato */

// Primeiro voce chama o framework pra uma const
/*
const express = require('express');
const app = express();

// Agora abra seu  servidor 

app.listen(8081, function(){
    console.log("Servidor funcionando ")
})

// Agora crie suas rotas 

app.get("/", function(req,res){
    res.send("Olá, Boa tarde")
})

app.get("/sobre", function(req,res){
    res.send("Essa parte é sobre mim")
})

app.get("/contato", function(req,res){
    res.send("Meu contato: 219988227733")
})
*/

// Crie rotas com parametross

const express = require('express');
const app = express();

app.listen(8081,function(){
    console.log("Funcionando")
})

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html')
})









