const express=require('express');
const bodyParser=require('body-parser');
const db=require('./dbconfig');
const multer=require('multer');
const router=express.Router();
const jwt=require('jsonwebtoken');
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'uploads');
    },
    filename:(req,file,callback)=>{
        const name=file.originalname.toLowerCase();
        callback(null,name);
    }
});



router.post("/register",multer({storage:storage}).single('image'),(req,res)=>
{
    req.body.image=req.file.filename;
    req.body.id = Date.now();
    
    db.collection('user').insert(req.body,(err)=>{
        err?res.json({status:'error'}):res.json({status:'done'});
    })
});
router.post("/login",(req,res)=>
{
console.log(req.body);
db.collection('user').find(req.body).toArray((err,result)=>{
    if(err)
    {
       res.json({status:'error'})
    }
    else if(result.length!=0){
        let payload={subject:result[0]._id};
        let token=jwt.sign(payload,'sgfhsdllslkfgty');
         console.log(token);
        res.json({status:result[0],token:token})
    }
    else{
        res.json({status:'invalid user'})

    }
    
})
});
router.get("/show",(req,res)=>
{

db.collection('user').find().toArray((err,result)=>{
    if(err)
    {
       res.json({status:'error'})
    }
    else{
    console.log(result);
        res.json({status:result})
    }
    
})
});


router.get("/bookingdetails",(req,res)=>{
db.collection('booking').find().toArray((err,result)=>{
    if(err)
    {
        res.json({status:'error'})
    }
    else{
        console.log(result);
        res.json({status:result});
    }
})

});



router.post('/onecategory',(req,res)=>{
    console.log(req.body.id);
    db.collection('user').find({id:req.body.id}).toArray((err,result)=>{
      if(err)
      {
        console.log(err);
        res.json({status:'error'})
      }
      else{
        if(result.length!=0)
        {
          console.log(result);        
          res.json({status:result[0]})
        }
        else
        {
          console.log('Error');
          res.json({status:''});
        }
         }
    });
    });





    router.post('/delete-product',(req,res)=>{
        db.collection('booking').remove({id:req.body.id},(err)=>{
            err?res.json({status:'0'}):res.json({status:'1'});
        });
    });

    
    router.post('/update-product',multer({storage:storage}).single('image'),(req,res)=>{
        req.body.image=req.file.filename;
        console.log(req.body);
        db.collection('user').update({id:req.body.id},{$set:req.body},{multi:true},(err)=>{
            err?res.json({status:'0'}):res.json({status:'1'});
        });
    });


    router.post('/addcat',(req,res)=>{
        console.log(req.body)
        req.body.id=Date.now()
        db.collection('booking').insert(req.body,err=>{
          err?res.json({status:'0'}):res.json({status:'1'})
        })
      })

    

module.exports=router;