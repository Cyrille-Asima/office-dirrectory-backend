const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/officedata',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected to office  data")

}).catch((err)=>{
    console.log(err)
})
    