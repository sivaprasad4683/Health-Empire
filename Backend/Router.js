const express=require("express")
const Router=express.Router()

const Customerdetail=require('../Backend/Customer/customercontroller')
const Footermsg=require('./Footer/footercontroller')
const Trainerdetail=require('./Trainer/trainercontroller')


Router.post('/cusreg', Customerdetail.Cusdetail)
Router.post('/cuslogin',Customerdetail.cuslogin)


Router.get('/viewcus',Customerdetail.viewcustomer)
Router.post('/foot',Footermsg.Foot)
Router.get('/viewfoot',Footermsg.viewfeed)

Router.post('/trreg', Trainerdetail.Trdetail)
Router.get('/viewalltr',Trainerdetail.viewalltr)
Router.post('/approvetr/:id',Trainerdetail.approvetr)
Router.get('/viewtr',Trainerdetail.viewapprovedtr)
Router.post('/removetr/:id',Trainerdetail.removetr)
Router.post('/trainlog',Trainerdetail.trlogin)
module.exports=Router