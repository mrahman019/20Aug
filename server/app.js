import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("hello all");
});

app.get("/register", (req, res) => {
    res.send("this is register page");
});

app.get("/Globalpage", (req, res) => {
    res.send("this is Gloabl page");
});
//IN SIMPLE APP HAS 2 PRAMS 
//METHOD ==> HTTP METHOD GET,POST,PUT,DELETE 


app.listen(PORT,()=>{
    console.log("Server is running");
});