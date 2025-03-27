import { type Context,  } from "@oak/oak/context";
import { type Next } from "@oak/oak/middleware";

export const main = async (ctx: Context,next:Next) => {
  console.log(ctx.request.headers.get("user-agent"));
  const headers = ctx.request.headers;
  console.log({headers})
  await next()
  
};
