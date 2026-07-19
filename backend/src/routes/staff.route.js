import express from "express";
import auth from "../middlewares/auth.middleware.js";
import authorizeRole from "../middlewares/authorizeRole.js";
import StaffController from "../controllers/staff.controller.js";

const router = express.Router();

router.route("/login").post(StaffController.login);

router.route("/")
    .post(auth, authorizeRole("staff"), StaffController.create)
    .get(StaffController.findAll)
    .delete(auth, authorizeRole("staff"), StaffController.deleteAll);

router.route("/:id")
    .put(auth, StaffController.update)
    .get(auth, StaffController.findOne)
    .delete(auth, authorizeRole("staff"), StaffController.deleteOne);

export default router;