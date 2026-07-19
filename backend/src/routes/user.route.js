import express from "express";
import auth from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.js";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", UserController.login);
router.post("/register", validate("user", "create"), UserController.create);

router.route("/")
    .post(validate("user", "create"), UserController.create)
    .get(auth, UserController.findAll)
    .delete(auth, UserController.deleteAll);

router.route("/:id")
    .put(auth, validate("user", "update"), UserController.update)
    .get(auth, UserController.findOne)
    .delete(auth, UserController.deleteOne);

export default router;
