import express from "express";
import app from '../server.js';
import {loginRequired, profile, register , sign_in} from "../controller/userController.js";

// const userRoutes = function(app) {
    
    // Articles Routes
//     app.route('/')
//         .post(loginRequired, profile);
//     app.route('/auth/register')
//         .post(register);
//    app.route('/auth/sign_in')
//         .post(sign_in);
// };

// export default userRoutes