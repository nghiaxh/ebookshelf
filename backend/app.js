import ApiError from "./src/api-error.js";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import staffRouter from "./src/routes/staff.route.js";
import userRouter from "./src/routes/user.route.js";
import publisherRouter from "./src/routes/publisher.route.js";
import bookRouter from "./src/routes/book.route.js";
import borrowRouter from "./src/routes/borrow.route.js";

const app = express();
app.use(cors());
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to CTU Ebookshelf" });
});

app.use("/staff", staffRouter);
app.use("/user", userRouter);
app.use("/publishers", publisherRouter);
app.use("/books", bookRouter);
app.use("/borrows", borrowRouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});


export default app;