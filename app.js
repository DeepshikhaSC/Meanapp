const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const http=require('http');
const path=require('path');
const api=require('./server/apis');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'dist/meanapp')));
app.use('/uploads',express.static(path.join('uploads')));
app.use('/webapi',api);

http.createServer(app).listen(3000,()=>{
    console.log('Server is Running....');
})