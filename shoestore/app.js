const express = require('express')
var bodyParser = require('body-parser');

const index = require('./routes/index')
const shoes = require('./routes/shoes')
const app = express()
const port = 3001

app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("/",index)
app.use("/shoes", shoes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})