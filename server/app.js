import express from "express";
const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("hello all");
});

app.post("/register", (req, res) => {
    let userData = req.body
    console.log(userData)
   // res.json(userData)

    //or
 res.json({msg:"user register successfully"})
})

//IN SIMPLE APP HAS 2 PRAMS 
//METHOD ==> HTTP METHOD GET,POST,PUT,DELETE 


app.listen(PORT,()=>{
    console.log("Server is running");
})