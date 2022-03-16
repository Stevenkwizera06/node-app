import express from "express";
import userHandlers from "../controller/userController.js";

module.exports = function(app) {
    
    // Articles Routes
    app.route('/')
        .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/auth/register')
        .post(userHandlers.register);
   app.route('/auth/sign_in')
        .post(userHandlers.sign_in);
};