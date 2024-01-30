/*
const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root','12348', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado")
}).catch(function(erro){
    console.log("falhou " + erro)
});

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Um Titulo Qualquer",
    conteudo: "Aqui está o conteudo da postagem"
})

UPDATE usuarios SET nome = 'Marayah Rodrigues', idade = 18 WHERE nome = 'André rodrigues';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root','12348',{
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: sequelize.STRING
    }
})


sequelize.authenticate().then(function(){
    console.log('Conectado')
}).catch(function(erro){
    console.log('falhou' + erro)
});

*/

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');


// config

    // template engine
        app.engine('handlebars', handlebars.engine(({defaultLayout: 'main'})));
        app.set('view engine', 'handlebars');

    // Body Parser
        app.use(bodyParser.urlencoded({extended: false})) 
        app.use(bodyParser.json())   

    // Conexão com o banco de dados
        const sequelize = new Sequelize('sistemadecadastro', 'root','12348',{
            host: 'localhost',
            dialect: 'mysql'
        });

    // Rotas    
            app.get('/cadastro', (req, res) => {
                res.render("formulario")
            })

    // Rota para recebimento de dados do formulário 
        app.post('/add', (req,res) => {
                res.send("FORMULÁRIO RECEBIDO!")
        })


app.listen(8081, () => {
    console.log("Servidor aberto na porta 8081")
});





