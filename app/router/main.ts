import { Router } from "@oak/oak/router";
import { main } from "../controller/main.ts";
import { type Context } from "@oak/oak/context";

export const router = new Router();

router.get("/", main,(ctx:Context) =>{
  ctx.response.status = 200;
  ctx.response.body = "Hello Https server";
});
