const Customerdetail=require('./customermodel')

const Cusdetail=((req,res)=>{
    let Customerone=new Customerdetail({
     Name:req.body.Name,
     Age:req.body.Age,
     Email:req.body.Email,
     Password:req.body.Password,
     Address:req.body.Address,
     Gender:req.body.Gender,
     State:req.body.State,
     City:req.body.City,
     Pincode:req.body.Pincode,
     Dateofbirth:req.body.Dateofbirth,
     Height:req.body.Height,
     Weight:req.body.Weight
    })

Customerone.save()
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
const viewcustomer=((req,res)=>{
    Customerdetail.find({})
    .then((result)=>{
        res.json({
            msg:result,
           
        })

    })
    .catch((err)=>{
        console.log("error"+err)
        })
    })

    //login

    const cuslogin = (req, res) => {
        const { Email, Password } = req.body;
    
        Customerdetail.findOne({ Email: Email })
            .then((data) => {
                if (!data) {
                    return res.json({
                        status: 400,
                        msg: "User not found"
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

module.exports={Cusdetail,viewcustomer,cuslogin}