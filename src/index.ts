import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia")

app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
