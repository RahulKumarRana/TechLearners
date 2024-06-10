const mongose=require('mongoose')
// require('dotenv').config()
// define url for mongodb..
const Localulr='mongodb://localhost:27017/student';
// const ONLINEURL='mongodb+srv://ranaji88095:password9@techtube.r6eaepw.mongodb.net/student'
mongose.connect(Localulr)
const db=mongose.connection;
//add Event listeners
db.on('connected',()=>{console.log('database connected..')})
db.on('error',()=>{console.log('error accure.')})
db.on('disconnected',()=>{console.log('database disconnected..')});
module.exports=db;