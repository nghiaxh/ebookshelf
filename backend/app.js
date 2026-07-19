import ApiError from "./src/api-error.js";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

import staffRouter from "./src/routes/staff.route.js";
import userRouter from "./src/routes/user.route.js";
import publisherRouter from "./src/routes/publisher.route.js";
import bookRouter from "./src/routes/book.route.js";
import borrowRouter from "./src/routes/borrow.route.js";

const app = express();
app.use(cors());
app.use(express.json());

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { message: "Too many login attempts, please try again after 15 minutes" },
    standardHeaders: true,
    legacyHeaders: false,
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to CTU Ebookshelf" });
});

app.use("/api/staff/login", loginLimiter);
app.use("/api/user/login", loginLimiter);

app.use("/api/staff", staffRouter);
app.use("/api/user", userRouter);
app.use("/api/publisher", publisherRouter);
app.use("/api/book", bookRouter);
app.use("/api/borrow", borrowRouter);

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});


export default app;