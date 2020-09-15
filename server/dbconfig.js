const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookingapp');
module.exports=mongoose.connection;