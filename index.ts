// @ts-ignore
import { Application } from "https://deno.land/x/oak/mod.ts";
// @ts-ignore
import router from "./routes/users.routes.ts";
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
console.log("Server running on port:", 3000);
app.listen({ port: 3000 });
