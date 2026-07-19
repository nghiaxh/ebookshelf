import ApiError from "../api-error.js";

export function authorizeRole(...roles) {
    return (req, res, next) => {
        if (!req.user) {
            return next(new ApiError(401, "Authentication required"));
        }

        if (!roles.includes(req.user.role)) {
            return next(new ApiError(403, "Insufficient permissions"));
        }

        next();
    };
}

export default authorizeRole;
