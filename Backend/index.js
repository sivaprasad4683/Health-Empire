const express=require('express')
const bodyparser=require("body-parser")
const db=require('./DbConnection')

const app=express()
const cors=require('cors')


app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
// app.use(express.static(`${__dirname}/uploads`));

app.use(cors())
const Router=require("./Router")
app.use("/",Router)


    app.listen(4004,()=>
    {
    console.log('server running')
    })