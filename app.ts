import { Application } from "https://deno.land/x/oak/mod.ts";

import todos from "./routes/todos.ts";

const app = new Application();

app.use(todos.routes());
app.use(todos.allowedMethods());

await app.listen({ port: 3000 });
