const express=require("express");
const userRoute = require('./routes/userRoute')
require('dotenv').config()

const PORT = process.env.PORT || 3000

require('../db/conn.js')

const hbs= require("hbs")

const app = express();

const routes= require('./routes/main')
const Detail=require("./models/Detail")

app.use(userRoute)

///static/css/style.css
app.use('/static',express.static("public"))
app.use('',routes)

//(template engine)

app.set('view engine', 'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connections

app.get("/",(req,res)=>{
    response.send("wow this is data from server")
})

app.listen(PORT,()=>{
    console.log(`server runnning ${PORT}`);
});
