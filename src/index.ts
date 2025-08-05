import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia");

const testendpoint = new Elysia().get("/test", () => "Hello Test");

app
  .use(testendpoint)
  .listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
