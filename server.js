const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
User = require('./server/model/user'),
jsonwebtoken = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const app = express()
app.use(bodyParser.json());

const port = 8000

app.listen(port, () =>{
    console.log(`connection is setup at port ${port}`)
})

app.use(express.json())

const articlesRouter = require('./server/routes/articles')
app.use('/articles' ,articlesRouter)

app.get('/',(req,res)=>{
    res.send('Welcome on the main page');
});

mongoose.connect(process.env.DBCONNECTION,{useNewUrlParser: true});

connection = mongoose.connection;
connection.once("open",()=>{
    console.log("connected to db");
});


app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      });
    } else {
      req.user = undefined;
      next();
    }
  });
  var routes = require('./server/routes/user-routes');
  routes(app);
  
