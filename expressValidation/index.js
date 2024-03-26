const express = require("express");
const todosRouter = require("./src/feature/todos/todos.routes");
const app = express();

const PORT = 3333;

app.use(express.json());

// Connect routers
app.use("/todos", todosRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

