import { Application } from "@oak/oak";

import { router } from "./router/main.ts";

export const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
