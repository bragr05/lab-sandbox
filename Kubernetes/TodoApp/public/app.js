async function fetchTodos() {
    const res = await fetch("/todos");
    const todos = await res.json();
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        li.innerHTML += ` <button onclick="deleteTodo(${index})">Eliminar</button>`;
        list.appendChild(li);
    });
}

async function addTodo() {
    const input = document.getElementById("todoInput");
    if (!input.value.trim()) return;
    await fetch("/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input.value }),
    });
    input.value = "";
    fetchTodos();
}

async function deleteTodo(index) {
    await fetch(`/todos/${index}`, { method: "DELETE" });
    fetchTodos();
}

fetchTodos();
