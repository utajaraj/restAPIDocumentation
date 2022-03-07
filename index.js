// config of server
const fs = require('fs');
const port = process.env.PORT || 5080
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const serveStatic = require("serve-static");
const { processEndpoints } = require('./processEndpoints');

// set directory to store views
app.set("views", __dirname + "/views/")

// set rendering engin
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 1000000
})) //exepand parser for big fat requests

// set public serve directory 
app.use(serveStatic(__dirname + "/public"))


app.get("/", (req, res) => {
    const data = require(__dirname+"/endpoints.json")
    res.render(`${__dirname}/views/app`,processEndpoints(JSON.stringify(data)))
})
app.get("/routes",(req,res)=>{
    getRoutes(req).then((good)=>{
        res.send(good)
    }).catch((bad)=>{
        res.send(bad)
    })
})
app.post("/routes",(req,res)=>{
    addRoute(req).then((good)=>{
        res.send(good)
    }).catch((bad)=>{
        res.send(bad)
    })
})

app.disable('x-powered-by')

app.listen(port,()=>{
    console.log(`Running on port: ${port}`);
})