// @ts-ignore
import { Router } from "https://deno.land/x/oak/mod.ts";
// @ts-ignore
import * as usersController from "../controllers/users.controllers.ts";

const router = new Router();

router.get("/api/users", usersController.getUsers);
router.get("/api/users/:userId", usersController.getUser);
router.post("/api/users", usersController.createUser);
router.delete("/api/users/:userId", usersController.deleteUser);
router.put("/api/users/:userId", usersController.updateUser);
export default router;
