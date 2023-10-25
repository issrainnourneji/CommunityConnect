const blog = require('../modele/blog')
const express = require('express')

function get (req,res,next){
    console.log("notre data : " +JSON.stringify(req.params))
    new blog({

        nom : req.params.nom,
        sujet:req.params.sujet,
        contenu :req.params.contenu
    }).save((err,data)=> {
        if (err) {
            console.log(err)
        }
        console.log(data)
        res.json(data)
    })
   }

   async function post (req,res,next){
    try{
        console.log("resu : " +JSON.stringify(req.body));
        const Blog = new blog(req.body)
        await Blog.save();
    res.send("added")
    }catch(err){
        console.log(err)
    }
   }

   async function update(req,res,next){
    try{

       await blog.findByIdAndUpdate(req.params.id,req.body, {new:true})
        res.send('update')
    }catch(err){
        res.send(err)
    }
   }

   async function deletet(req,res,next){
    try{
        await blog.findByIdAndRemove(req.params.id)
        res.send("delete")
    }catch(err){
        res.send(err)
    }
   }

    async function getbyid(req,res,next){
        try{
           const data = await blog.findById(req.params.id)
            res.send(data)
        }catch(err){
            res.send(err)
        }
       }


   async function getall(req,res,next){
    try{
       const data = await blog.find()
        res.send(data)
    }catch(err){
        res.send(err)
    }
   }

   module.exports={get, post,update,deletet,getall, getbyid}