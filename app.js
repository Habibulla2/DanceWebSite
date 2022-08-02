const express = require("express")
const path = require("path")
//const fs = require("fs")
const app = express();
const port = 5000;

//EXPRESS SPECIFIC STUFF
//app.use(express.static('static', Options))
app.use('/static', express.static('static'))
app.use(express.urlencoded());

//PUG SPECIFIED STUFF
app.set('view engine','pug')  //set the template engine as pug
app.set('views', path.join(__dirname, 'views'))  //set the views directory


//ENDPOINTS
app.get("/", (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params)
})
app.get("/contact", (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params)
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})