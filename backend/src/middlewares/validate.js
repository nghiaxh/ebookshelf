import ApiError from "../api-error.js";

const validators = {
    book: {
        create(req, res, next) {
            const errors = [];
            if (!req.body?.title || typeof req.body.title !== "string" || req.body.title.trim().length === 0) {
                errors.push("title is required and must be a non-empty string");
            }
            if (req.body.price !== undefined && (typeof req.body.price !== "number" || req.body.price < 0)) {
                errors.push("price must be a non-negative number");
            }
            if (req.body.quantity !== undefined && (typeof req.body.quantity !== "number" || req.body.quantity < 0 || !Number.isInteger(req.body.quantity))) {
                errors.push("quantity must be a non-negative integer");
            }
            if (req.body.published_year !== undefined && (typeof req.body.published_year !== "number" || req.body.published_year < 0)) {
                errors.push("published_year must be a valid year");
            }
            if (req.body.publisher_id !== undefined && typeof req.body.publisher_id !== "string") {
                errors.push("publisher_id must be a string");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        },
        update(req, res, next) {
            const errors = [];
            if (req.body.title !== undefined && (typeof req.body.title !== "string" || req.body.title.trim().length === 0)) {
                errors.push("title must be a non-empty string");
            }
            if (req.body.price !== undefined && (typeof req.body.price !== "number" || req.body.price < 0)) {
                errors.push("price must be a non-negative number");
            }
            if (req.body.quantity !== undefined && (typeof req.body.quantity !== "number" || req.body.quantity < 0 || !Number.isInteger(req.body.quantity))) {
                errors.push("quantity must be a non-negative integer");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        }
    },

    user: {
        create(req, res, next) {
            const errors = [];
            if (!req.body?.username || typeof req.body.username !== "string" || req.body.username.trim().length === 0) {
                errors.push("username is required");
            }
            if (!req.body?.password || typeof req.body.password !== "string") {
                errors.push("password is required");
            }
            if (!req.body?.first_name || typeof req.body.first_name !== "string" || req.body.first_name.trim().length === 0) {
                errors.push("first_name is required");
            }
            if (!req.body?.last_name || typeof req.body.last_name !== "string" || req.body.last_name.trim().length === 0) {
                errors.push("last_name is required");
            }
            if (req.body.phone !== undefined && typeof req.body.phone !== "string") {
                errors.push("phone must be a string");
            }
            if (req.body.address !== undefined && typeof req.body.address !== "string") {
                errors.push("address must be a string");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        },
        update(req, res, next) {
            const errors = [];
            if (req.body.username !== undefined && (typeof req.body.username !== "string" || req.body.username.trim().length === 0)) {
                errors.push("username must be a non-empty string");
            }
            if (req.body.first_name !== undefined && (typeof req.body.first_name !== "string" || req.body.first_name.trim().length === 0)) {
                errors.push("first_name must be a non-empty string");
            }
            if (req.body.last_name !== undefined && (typeof req.body.last_name !== "string" || req.body.last_name.trim().length === 0)) {
                errors.push("last_name must be a non-empty string");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        }
    },

    staff: {
        create(req, res, next) {
            const errors = [];
            if (!req.body?.username || typeof req.body.username !== "string" || req.body.username.trim().length === 0) {
                errors.push("username is required");
            }
            if (!req.body?.password || typeof req.body.password !== "string") {
                errors.push("password is required");
            }
            if (!req.body?.name || typeof req.body.name !== "string" || req.body.name.trim().length === 0) {
                errors.push("name is required");
            }
            if (!req.body?.address || typeof req.body.address !== "string") {
                errors.push("address is required");
            }
            if (!req.body?.phone || typeof req.body.phone !== "string") {
                errors.push("phone is required");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        },
        update(req, res, next) {
            const errors = [];
            if (req.body.username !== undefined && (typeof req.body.username !== "string" || req.body.username.trim().length === 0)) {
                errors.push("username must be a non-empty string");
            }
            if (req.body.name !== undefined && (typeof req.body.name !== "string" || req.body.name.trim().length === 0)) {
                errors.push("name must be a non-empty string");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        }
    },

    publisher: {
        create(req, res, next) {
            const errors = [];
            if (!req.body?.name || typeof req.body.name !== "string" || req.body.name.trim().length === 0) {
                errors.push("name is required");
            }
            if (req.body.address !== undefined && typeof req.body.address !== "string") {
                errors.push("address must be a string");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        },
        update(req, res, next) {
            const errors = [];
            if (req.body.name !== undefined && (typeof req.body.name !== "string" || req.body.name.trim().length === 0)) {
                errors.push("name must be a non-empty string");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        }
    },

    borrow: {
        create(req, res, next) {
            const errors = [];
            if (!req.body?.user_id || typeof req.body.user_id !== "string") {
                errors.push("user_id is required");
            }
            if (!req.body?.book_id || typeof req.body.book_id !== "string") {
                errors.push("book_id is required");
            }
            if (!req.body?.return_date) {
                errors.push("return_date is required");
            }
            if (errors.length > 0) {
                return next(new ApiError(400, errors.join("; ")));
            }
            next();
        },
        update(req, res, next) {
            next();
        }
    }
};

export function validate(entity, action) {
    return (req, res, next) => {
        const validator = validators[entity]?.[action];
        if (validator) {
            return validator(req, res, next);
        }
        next();
    };
}

export default validate;
