import User from "../model/user.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";


const checkUser = async (req, res, next) => {
    let token
    try {
        if (req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }
        if (!token) {
            return res.status(401).json({ message: 'first login' })
        }
        const decoded = await promisify(jwt.verify)(token,  'iamSteven')
        const gotUser = await User.findById(decoded._id)
        if(!gotUser){
            return res.status(401).json({ message: 'user does not exit' })
        }
        req.user=gotUser
    } catch (error) {
        res.status(401).json({
            message:"😛"
        })

    }
    next()
}
