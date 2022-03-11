const express = require("express")
const req = require("express/lib/request")
const router = express.Router()
const Articles = require('../model/articles')



// getting all
router.get('/', async(req,res) => {
    try{
        const articles = await Articles.find()
        res.json(articles)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


// creating one
router.post('/', async (req,res) => {
    const article = new Articles({
        title:req.body.title,
        summary:req.body.summary,
        body:req.body.body,
    })
    article.save((err,data) => {
        res.status(200).json({code:200, message: 'Article Added Successfully',
        addArticle:data})
    
    })
})
//See all Articles
router.get('/',async(req,res)=>{
    try{
        const articles = await Articles.find()
        res.json(articles);
    }catch(err){
        res.json({message:err})
    }
});
//See one Article
router.get('/:ArtID',async(req,res)=>{
    try{
        const articles = await Articles.findById(req.params.ArtID)
        res.json(articles);
    }catch(err){
        res.json({message:err})
    }
});
//Delete an Article
router.delete('/:ArtID',async(req,res)=>{
    try{
       await Articles.remove({_id:req.params.ArtID})
        res.json("Article deleted");
    }catch(err){
        res.json({message:err})
    }
});
//Update an Article
router.patch('/:ArtID',async(req,res)=>{
    try{
       await Articles.updateOne({_id:req.params.ArtID},{$set:{title:req.body.title,summary:req.body.summary,body:req.body.summary}})
        res.json("Article Updated");
    }catch(err){
        res.json({message:err})
    }
});



module.exports = router