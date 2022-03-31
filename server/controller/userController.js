import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/user.js";
import express from "express";

// User = mongoose.model('User');
const router = express.Router();
router.post('/register', (req, res)=>{
  let newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
})

  

router.post('/sign_in', (req, res)=>{
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    }
    return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
  });
});

 


// router.post('loginRequired', (req, res, next)=>{
//   if (req.user) {
//     next();
//   } else {

//     return res.status(401).json({ message: 'Unauthorized user!!' });
//   }
// });

  
// export const profile = function(req, res, next) {
//   if (req.user) {
//     res.send(req.user);
//     next();
//   } 
//   else {
//    return res.status(401).json({ message: 'Invalid token' });
//   }
// };

export default router

