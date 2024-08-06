const Trainerdetail=require('./trainermodel')

const Trdetail=((req,res)=>{
    let Trainerone=new Trainerdetail({
     Name:req.body.Name,
     Age:req.body.Age,
     Email:req.body.Email,
     Password:req.body.Password,
     Address:req.body.Address,
     Gender:req.body.Gender,
     State:req.body.State,
     City:req.body.City,
     Pincode:req.body.Pincode,
     Experience:req.body.Experience,
     Role:req.body.Role,
     Dateofbirth:req.body.Dateofbirth,
    
   
    })

Trainerone.save()
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

//viewreq
 const viewalltr=((req,res)=>{
    Trainerdetail.find({isActive:false})
    .then((result)=>{
        res.json({
            msg:result,
           
        })

    })
    .catch((err)=>{
        console.log("error"+err)
        })
    
 })

 //approve

 const approvetr = ((req, res) => {
    Trainerdetail.findByIdAndUpdate({ _id: req.params.id }, { isActive: true })
   
      .then((result) => {
       res.json({
          status: 200,
          msg: result,
         
        })
   
    })
      .catch((error) => {
        console.log(error);
        res.json({
          status: 400,
          msg: "Approval Fail",
         
        })
   
  })
 })
 
 //viewapprovedtrainer
 const viewapprovedtr=((req,res)=>{
    Trainerdetail.find({isActive:true})
    .then((result)=>{
        res.json({
            msg:result,
           
        })

    })
    .catch((err)=>{
        console.log("error"+err)
        })
    
 })

 //remove
  
 const removetr = ((req, res) => {
    Trainerdetail.findByIdAndDelete({ _id: req.params.id }, { isActive: true })
   
      .then((result) => {
       res.json({
          status: 200,
          msg: result,
         
        })
   
    })
      .catch((error) => {
        console.log(error);
        res.json({
          status: 400,
          msg: "Fail",
         
        })
   
  })
 })

 //login

 const trlogin = (req, res) => {
    const { Email, Password } = req.body;

    Trainerdetail.findOne({ Email: Email })
        .then((data) => {
            if (!data) {
                return res.json({
                    status: 400,
                    msg: "User not found"
                });
            }
            if (!data.isActive) {
                return res.json({
                    status: 403,
                    msg: "Trainer is not approved yet"
                });
            }
            



            if (Password === data.Password) {
                return res.json({
                    status: 200,
                    msg: "Login successfully"
                });
            } else {
                return res.json({
                    status: 500,
                    msg: "Incorrect password",
                   
                });
            }
        })
        .catch((err) => {
            return res.json({
                status: 400,
                msg: "User not found"
            });
        });
};




module.exports={Trdetail,viewalltr,approvetr,viewapprovedtr,removetr,trlogin}