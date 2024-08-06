const Footermsg=require('./footermodel')

const Foot=((req,res)=>{
    let Footerone=new Footermsg({
     Name:req.body.Name,
     Email:req.body.Email,
     Comments:req.body.Comments,
    })

Footerone.save()
.then((result)=>{
    res.json({
        status:200,
        msg:result
    })
   
})
.catch((err)=>{
    res.json({
        status:500,
        msg:"value not added"
    })
})
})

//view

const viewfeed=((req,res)=>{
    Footermsg.find({})
    .then((result)=>{
        res.json({
            msg:result,
         
        })

    })
    .catch((err)=>{
        console.log("error"+err)
        })
    })




module.exports={Foot,viewfeed}