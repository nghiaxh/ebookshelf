import express from "express";
import auth from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.js";
import StaffController from "../controllers/staff.controller.js";

const router = express.Router();

router.route("/login").post(StaffController.login);

router.route("/")
    .post(auth, validate("staff", "create"), StaffController.create)
    .get(StaffController.findAll)
    .delete(auth, StaffController.deleteAll);

router.route("/:id")
    .put(auth, validate("staff", "update"), StaffController.update)
    .get(auth, StaffController.findOne)
    .delete(auth, StaffController.deleteOne);

export default router;
