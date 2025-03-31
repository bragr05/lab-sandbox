// Importar módulos necesarios
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos y parsear JSON
app.use(express.static("public"));
app.use(express.json());

// Lista de tareas en memoria
let todos = [];

// Rutas API
app.get("/todos", (req, res) => {
    res.json(todos);
});

app.post("/todos", (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.json({ message: "Tarea agregada", todo });
});

app.delete("/todos/:index", (req, res) => {
    const index = req.params.index;
    todos.splice(index, 1);
    res.json({ message: "Tarea eliminada" });
});

// Servidor escuchando
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
