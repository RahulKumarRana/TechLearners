var _ = require("lodash");
var obj = require("fs");
var ios = require("os");
var expres = require("express");
var app = expres();
// require('dotenv').config()
//db connection for connect node.js to database.
const db = require("./db");

//Routers for perfoming the operation in main server:-

const stdrout = require("./routers/studentRouter");
const login = require("./routers/loginRouter");
const teacher = require("./routers/teachersRouter");
const teacherLogin = require("./routers/teacherLoginRouter");
const update = require("./routers/updateStudent");
const delet = require("./routers/deleteStudent");
const about=require("./routers/aboutRouter")
const cource=require('./routers/cources')
const profile=require('./routers/profileRouter')
const playlist=require('./routers/playlistRouter')
const home=require('./routers/homeRouter')
const java=require('./routers/javarouter')
const ai=require('./routers/airouter')
const boot=require('./routers/ht')
const js=require('./routers/jsrouter')
// const roadmap=require('./routers/roadmapRouter')

//bodyParser for converting data into json format ..
// app.use.expres('fronEnd')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(expres.json())
const { error } = require("console");
app.use(expres.static("public"));
app.use("/", stdrout);
app.use("/home.html",home)
app.use("/register.html", stdrout);
app.use("/about.html",about)
app.use("/courses.html",cource)
app.use("/profile.html",profile)
app.use("/playlist.html",playlist)
app.use("/playlistjs.html",js)
app.use("/bootstap.html",boot)
app.use("/login", login);
app.use("/teacherRegister", teacher);
app.use("/teacherLogin", teacherLogin);
app.use("/update", update);
app.use("/delete", delet);
app.use("/ai.html",ai)
app.listen(3000, () => {
  console.log("server running successfully..");
});
