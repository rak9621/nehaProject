const mongoose =  require('mongoose')

 

mongoose.set("strictQuery", false);

mongoose.connect( process.env.DB_CONN_URL ).then(() => {

    console.log("database is connected")

}).catch(() => {
    
    console.log("database is not connected")

})


 