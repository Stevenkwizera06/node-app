import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
})







export  default mongoose.model('Articles', articlesSchema)
