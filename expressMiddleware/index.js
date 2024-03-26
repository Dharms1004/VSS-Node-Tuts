const express = require("express");
const app = express();

const PORT = 3333;

app.use(express.json());


app.get("/", (req, res, next) => {
    const { user } = req.query;
    console.log(user);
    if(!["Surinder", "Dharminder"].includes(user)){
        return res.status(400).send({message: "You are not allowed to see this page."});
    }  
    next();
},
(req, res) => {
    const { user } = req.query;
    return res.send({ message: `Welcome ${user} to the team.` });
}
);

app.post("/todos", (req, res) => {
    console.log("Body", req.body);
    const { title } = req.body;

    if(!title){
        return res.status(400).send({ message: "Please enter title first."});
    }

    res.send({message: "Welcome to todos."});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});