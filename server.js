
var express  = require('express'),
    path     = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    expressValidator = require('express-validator');


/*Set EJS template Engine*/
app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //support x-www-form-urlencoded
app.use(bodyParser.json());
app.use(expressValidator());

/*MySql connection*/
var connection  = require('express-myconnection'),
    mysql = require('mysql');

// tem que mudar para os seus dados
app.use(
    connection(mysql,{
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'projeto1',
        debug    : false, //set true if you wanna see debug logger
        multipleStatements: true
    }, 'request')

);

// esse é o mapeamento mais basico
app.get('/',function(req,res){
    res.sendFile('views/home.html' , { root : __dirname});
});


//RESTful route - lê-se salvador da pátria
var router = express.Router();

// Ajuda a monitorar o que está rolando
router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

var rota_pessoa = router.route('/pessoa');
var rota_filme = router.route('/filme');
var rota_genero = router.route('/genero');
var rota_acao = router.route('/genero/Acao')

//R do CRUD  | GET
rota_pessoa.get(function(req,res,next){


    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM Pessoa',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('user',{title:"RESTful Crud Example",data:rows});

         });

    });

});


//C do CRUD | POST
rota_pessoa.post(function(req,res,next){

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    //pega os dados
    var data = {
        nome:req.body.nome,
        telefone:req.body.telefone,
        endereco:req.body.endereco,
     };

    //insere no mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO Pessoa set ? ",data, function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });

});

rota_filme.get(function(req,res,next){


    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM Filme, Genero WHERE Filme.id_genero = Genero.id_genero; SELECT * FROM Genero',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            console.log(rows);

            res.render('filme',{title:"RESTful Crud Example",data:rows});

         });

    });

});


//C do CRUD | POST
rota_filme.post(function(req,res,next){

    var errors = req.validationErrors();
    if(errors){
        res.status(422).json(errors);
        return;
    }

    //insere no mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO Filme (nome_filme, duracao, id_genero) VALUES (?,?,(SELECT id_genero FROM Genero WHERE nome_genero = ?))",[req.body.titulo,req.body.duracao, req.body.genero], function(err, rows){

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

        var query = conn.query('SELECT nome_genero FROM Genero',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            res.render('genero',{title:"RESTful Crud Example",data:rows});

         });

    });

});


var rota_pessoa2 = router.route('/pessoa/:id_pessoa');
var rota_filme2 = router.route('/filme/:id_filme');

// // U do CRUD -> abre form de edição | GET
// rota_pessoa2.get(function(req,res,next){

//     var user_id = req.params.user_id;

//     req.getConnection(function(err,conn){

//         if (err) return next("Cannot Connect");

//         var query = conn.query("SELECT * FROM user WHERE user_id = ? ",[user_id],function(err,rows){

//             if(err){
//                 console.log(err);
//                 return next("Mysql error, check your query");
//             }

//             //if user not found
//             if(rows.length < 1)
//                 return res.send("User Not found");

//             res.render('edit',{title:"Edit user",data:rows});
//         });

//     });

// });

// //U do CRUD -> agora é a mesma coisa do create | PUT
// rota_pessoa2.put(function(req,res,next){
//     var user_id = req.params.user_id;

//     //validação
//     // req.assert('name','Name is required').notEmpty();
//     // req.assert('email','A valid email is required').isEmail();
//     // req.assert('password','Enter a password 6 - 20').len(6,20);

//     var errors = req.validationErrors();
//     if(errors){
//         res.status(422).json(errors);
//         return;
//     }

//     //dados
//     var data = {
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//      };

//     //coloca no mysql
//     req.getConnection(function (err, conn){

//         if (err) return next("Cannot Connect");

//         var query = conn.query("UPDATE Pessoa set ? WHERE id_pessoa = ? ",[data,id_pessoa], function(err, rows){

//            if(err){
//                 console.log(err);
//                 return next("Mysql error, check your query");
//            }

//           res.sendStatus(200);

//         });

//      });

// });

//D do CRUD | DELETE
rota_pessoa2.delete(function(req,res,next){

    var id_pessoa = req.params.id_pessoa;

     req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("DELETE FROM Pessoa WHERE id_pessoa = ? ",[id_pessoa], function(err, rows){

             if(err){
                console.log(err);
                return next("Mysql error, check your query");
             }

             res.sendStatus(200);

        });
        //console.log(query.sql);

     });
});

rota_filme2.put(function(req,res,next){

    var id_filme = req.params.id_filme;

     req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("UPDATE Filme SET validade_filme = 0 WHERE id_filme = ? ",[id_filme], function(err, rows){

             if(err){
                console.log(err);
                return next("Mysql error, check your query");
             }

             res.sendStatus(200);

        });
        //console.log(query.sql);

     });
});


//now we need to apply our router here
app.use('/api', router);

//start Server
var server = app.listen(3000,function(){

   console.log("Listening to port %s",server.address().port);

});
