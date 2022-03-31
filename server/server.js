import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import jsonwebtoken from "jsonwebtoken";
import articlesRouter from "./routes/articles.js";
import UserRouter from "./controller/userController.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());

const port = 8000

app.listen(port, () =>{
    console.log(`connection is setup at port ${port}`)
})

app.use(express.json());
app.use('/article', articlesRouter)

app.get('/',(req,res)=>{
    res.send('Welcome on the main page');
});

mongoose.connect(process.env.DBCONNECTION,{useNewUrlParser: true});

let connection = mongoose.connection;
connection.once("open",()=>{
    console.log("connected to db");
});

app.use('/',UserRouter)
// app.use(function(req, res, next) {
//     if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
//       jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
//         if (err) req.User = undefined;
//         req.User = decode;
//         next();
//       });
//     } else {
//       req.User = undefined;
//       next();
//     }
//   });
 
export default app;
  
