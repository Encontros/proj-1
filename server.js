
var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    expressValidator = require('express-validator');

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(expressValidator());

var connection  = require('express-myconnection'),
    mysql = require('mysql');

app.use(
    connection(mysql,{
        host     : 'localhost',
        user     : 'usuario',
        password : 'megadados',
        database : 'projeto1',
        debug    : false, 
        multipleStatements: true
    }, 'request')

);

app.get('/',function(req,res){
    res.sendFile('views/home.html' , { root : __dirname});
});

var router = express.Router();

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

var rota_pessoa = router.route('/pessoa');
var rota_pessoa_id = router.route('/pessoa/:id_pessoa')
var rota_filme = router.route('/filme');
var rota_filme_id = router.route('/filme/:id_filme');
var rota_genero = router.route('/genero');
var rota_filmes_genero = router.route('/genero/:id_genero');
var rota_encontro = router.route('/encontro');
var rota_encontro_id = router.route('/encontro/:id_encontro');

rota_pessoa.get(function(req,res,next){

    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM Pessoa WHERE validade_pessoa=1',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('pessoa',{data:rows});

        });

    });

});

rota_pessoa.post(function(req,res,next){

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    var data = {
        nome:req.body.nome,
        telefone:req.body.telefone,
        endereco:req.body.endereco,
    };

    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO Pessoa set ? ",data, function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.sendStatus(201);

        });

    });

});

rota_pessoa_id.get(function(req,res,next){
    var id_pessoa = req.params.id_pessoa;
    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT nome_filme FROM Filme WHERE validade_filme=1;SELECT * FROM Filme, Pessoa, PessoaFilme WHERE Filme.id_filme = PessoaFilme.id_filme AND Pessoa.id_pessoa = PessoaFilme.id_pessoa AND validade_filme=1 AND validade_pessoafilme=1 AND validade_pessoa=1 AND Pessoa.id_pessoa = ?',id_pessoa ,function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('assistidos',{data:rows});

        });

    });

});

rota_pessoa_id.post(function(req,res,next){

    var id_pessoa = req.params.id_pessoa;

    req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO PessoaFilme (id_filme, id_pessoa) VALUES ((SELECT id_filme FROM Filme WHERE nome_filme = ? and validade_filme=1),?)",[req.body.filmes, id_pessoa], function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.sendStatus(200);

        });

    });

});

rota_pessoa_id.put(function(req,res,next){

    var id_pessoa = req.params.id_pessoa;

    req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("UPDATE Pessoa SET validade_pessoa = 0 WHERE id_pessoa = ?",[id_pessoa], function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.sendStatus(200);

        });
        //console.log(query.sql);

    });
});

rota_filme.get(function(req,res,next){

    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM Filme, Genero WHERE Filme.id_genero = Genero.id_genero AND validade_filme = 1 AND validade_genero = 1; SELECT * FROM Genero WHERE validade_genero = 1',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('filme',{data:rows});

        });

    });

});

rota_filme.post(function(req,res,next){

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO Filme (nome_filme, duracao, id_genero) VALUES (?,?,(SELECT id_genero FROM Genero WHERE nome_genero = ? AND validade_genero=1))",[req.body.titulo,req.body.duracao, req.body.genero], function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.sendStatus(200);

        });

    });

});

rota_genero.get(function(req,res,next){

    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT nome_genero, id_genero FROM Genero WHERE validade_genero=1',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('genero',{data:rows});

        });

    });

});

rota_filmes_genero.get(function(req,res,next){

    var id_genero = req.params.id_genero;
    
    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM Filme, Genero WHERE Filme.id_genero = Genero.id_genero AND (Genero.id_genero  =  ?) AND validade_filme=1 AND validade_genero=1',id_genero ,function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('filme_genero',{data:rows});

        });

    });

});

rota_encontro.get(function(req,res,next){


    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM Encontro, Filme, Pessoa, PessoaEncontro WHERE Encontro.id_encontro = PessoaEncontro.id_encontro AND Filme.id_filme = Encontro.id_filme AND Pessoa.id_pessoa = PessoaEncontro.id_pessoa AND Pessoa.id_pessoa = Encontro.id_anfitriao AND validade_pessoa = 1 AND validade_encontro = 1 AND validade_filme=1 AND validade_pessoaencontro=1 ORDER BY data_encontro; SELECT nome_filme FROM Filme WHERE validade_filme =1; SELECT nome FROM Pessoa WHERE validade_pessoa;',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('encontro',{data:rows});

        });

    });

});

rota_encontro.post(function(req,res,next){

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO Encontro (data_encontro, id_anfitriao, id_filme) VALUES (?,(SELECT id_pessoa FROM Pessoa WHERE nome = ? AND validade_pessoa=1),(SELECT id_filme FROM Filme WHERE nome_filme = ? AND validade_filme=1));INSERT INTO PessoaEncontro (id_pessoa, id_encontro) VALUES ((SELECT id_pessoa FROM Pessoa WHERE nome = ? AND validade_pessoa=1),(SELECT max(id_encontro) FROM Encontro WHERE validade_encontro=1))",[req.body.data_encontro,req.body.anfitriao, req.body.filme, req.body.anfitriao], function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.sendStatus(200);

        });

    });

});

rota_encontro_id.get(function(req,res,next){

    var id_encontro = req.params.id_encontro;
    
    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT nome FROM Pessoa WHERE validade_pessoa=1;SELECT * FROM Encontro, Pessoa, PessoaEncontro WHERE Encontro.id_encontro = PessoaEncontro.id_encontro AND Pessoa.id_pessoa = PessoaEncontro.id_pessoa AND (Encontro.id_encontro = ?)AND validade_encontro=1 AND validade_pessoaencontro=1 AND validade_pessoa=1',id_encontro ,function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('participantes',{data:rows});

        });

    });

});

rota_encontro_id.post(function(req,res,next){

    var id_encontro = req.params.id_encontro;

    req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO PessoaEncontro (id_pessoa, id_encontro) VALUES ((SELECT id_pessoa FROM Pessoa WHERE nome = ? and validade_pessoa=1),?)",[req.body.particip, id_encontro], function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.sendStatus(200);

        });

    });

});

rota_encontro_id.put(function(req,res,next){

    var id_encontro = req.params.id_encontro;

    req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("UPDATE Encontro SET validade_encontro = 0 WHERE id_encontro = ?",[id_encontro], function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.sendStatus(200);

        });

    });

});


rota_filme_id.put(function(req,res,next){

    var id_filme = req.params.id_filme;

    req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("UPDATE Filme SET validade_filme = 0 WHERE id_filme = ?",[id_filme], function(err, rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.sendStatus(200);

        });

    });

});

app.use('/api', router);

var server = app.listen(3000,function(){

    console.log("Listening to port %s",server.address().port);

});
