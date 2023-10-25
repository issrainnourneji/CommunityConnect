const express = require ('express')
const router  =express.Router();
 const blog = require ('../modele/blog')

 const blogController = require ('../controller/blogController')
router.get('/show', (req,res,next)=>{
 res.send("hello");
});

router.get('/add/:nom/:mot/:status/:Numtel' , blogController.get)
router.post('/new' , blogController.post)
router.put('/update/:id' , blogController.update)
router.delete('/delete/:id' , blogController.deletet)
router.get('/getall' , blogController.getall)
router.get('/getbyid/:id' , blogController.getbyid)


 
module.exports=router;