import { Router } from "https://deno.land/x/oak/mod.ts";

interface Todo {
  id: string;
  text: string;
}

let todos: Array<Todo> = [];

const router = new Router();

router.get("/todos", (ctx) => {
  ctx.response.body = { todos: todos };
});

router.post("/todos", async (ctx) => {
  const { text } = await ctx.request.body().value;

  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: text,
  };

  todos.push(newTodo);

  ctx.response.body = { message: "Created todo!", todos: todos };
});

router.put("/todos/:todoId", async (ctx) => {
  const id = ctx.params.todoId;
  const { text } = await ctx.request.body().value;

  const index: number = todos.findIndex((todo) => todo.id === id);
  todos[index] = { id: new Date().toISOString(), text: text };

  ctx.response.body = { message: "Modified your todo!", todos: todos };
});

router.delete("/todos/:todoId", (ctx) => {
  const id = ctx.params.todoId;

  todos = todos.filter((todo) => todo.id !== id);

  ctx.response.body = { message: "Deleted your todo!", todos: todos };
});

export default router;
