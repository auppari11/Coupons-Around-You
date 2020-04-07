
const configval=require('./config');
const apiRouter=require('./api');
const express=require('express');
const server=express();
const path=require('path');
// import  'config.js';
server.use(express.static(__dirname +'/public'));
server.get('/favicon.ico',(req,res,next)=>{
    return res.sendStatus(204);
});
server.set('view engine','pug');
server.locals.pretty=true;
server.set('views',path.join(__dirname,'./views'));
server.get('/',(req,res)=>{
  return  res.render('index',{
    page:'Login'
  });
});
server.get('/Register',(req,res)=>{
  return  res.render('index',{
    page:'Register'
  });
});
server.get('/Merchant',(req,res)=>{
  return  res.render('index',{
    page:'Merchant'
  });
});
server.use('/api',apiRouter);

server.listen(configval.port,()=>{
 console.log('express listening to port', configval.port);
});