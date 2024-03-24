const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const PORT = 7001;

// store todos in a Variable
let todos = [];

const createResponse = (data, message) => {
  return {
      data,
      meta: {
        message
      }
  };
};

// Route to add new Todo

app.post("/todos", (request, response) => {
  try {
    const { title, description} = request.body;
    const timestamp = new Date().toISOString();
    const newTodo = { id: uuidv4(), title, description, timestamp}

    todos.push(newTodo);
    const res = createResponse(newTodo, "Todo created Successfuly.")
    response.status(201).json(res);
  } catch (error) {
    response.status(500).json({error: error.message});
  }
});

app.get("/todos", (request, response) => {
  try {
    const res = createResponse(
      { todos, totalRecords: todos.length },
      todos.length > 0 ? "Todos list found" : "No todos available"
    );

    response.status(201).json(res);
  } catch (error) {
    response.status(500).json({error: error.message});
  }
});

app.get("/todos/:id", (request, response) => {
  try {
      const { id } = request.params;
      const todo = todos.find((todo) => todo.id === id)

      if (!todo) {
        const res = createResponse({}, "No todo found with the given ID");
        response.status(410).json(res); 
      }

      const res = createResponse(todo, "Todo details found");
      return response.status(200).json(res);
    
  } catch (error) {
    response.status(500).json({error: error.message});
  }
});

app.delete("/todos/:id", (request, response) => {

  try {
    const { id } = request.params;

    todos = todos.filter((todo) => todo.id !== id) 
    const res = createResponse(null, "Item deleted Succesfuly.")
  
    response.status(200).json(res);
  } catch (error) {
    response.status(500).json({error: error.message});
  }

});

app.put("/todos/:id", (request, response) => {

  try { 
    const { id } = request.params;
    const { title, description } = request.body;
  
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex !== -1) {
      todos[todoIndex] = { ...todos[todoIndex], title, description };
      const res = createResponse(
        todos[todoIndex],
        "Todo updated successfully"
      );
      response.status(200).json(res);
    } else {
      response.status(404).json({ message: "No todo found with the given ID" });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }

});


// Run a server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});