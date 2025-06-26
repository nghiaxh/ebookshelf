import Book from "../models/book.model";
import ApiError from "../api-error";

export async function create(req, res, next) {
    console.log("req.body: ", req.body);
    console.log("req.file:", req.file);

    if (!req.body?.title) {
        return next(new ApiError(400, "Book title cannot be empty"));
    }
    try {
        const image_url = req.file ? `/uploads/books/${req.file.filename}` : null;
        const document = await Book.create(req.body, image_url);
        return res.status(201).json(document);
    } catch (error) {
        return next(new ApiError(500, "Error creating the book"));
    }
}

export async function findAll(req, res, next) {
    let documents = [];

    try {
        const { title } = req.query;
        if (title) {
            documents = await Book.findByName(title);
        } else {
            documents = await Book.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving the list of books")
        );
    }
    return res.send(documents);
}

export async function findOne(req, res, next) {
    try {
        const document = await Book.findById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Book not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, `Error retrieving book with id=${req.params.id}`)
        );
    }
}

export async function update(req, res, next) {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    if (Object.keys(req.body).length === 0 && !req.file) {
        return next(new ApiError(400, "Data to update cannot be empty"));
    }

    try {
        const image_url = req.file
            ? `/uploads/books/${req.file.filename}`
            : req.body.image || null;
        delete req.body.image;
        const document = await Book.update(
            req.params.id,
            req.body,
            image_url
        );

        if (!document) {
            return next(new ApiError(404, "Book not found"));
        }

        return res.send({ message: "Book updated successfully", document });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating book with id=${req.params.id}`)
        );
    }
}

export async function deleteOne(req, res, next) {
    try {
        const document = await Book.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Book not found"));
        }
        return res.send({ message: "Book deleted successfully" });
    } catch (error) {
        return next(
            new ApiError(500, `Could not delete book with id=${req.params.id}`)
        );
    }
};

export async function deleteAll(req, res, next) {
    try {
        const deleteCount = await Book.deleteAll();
        return res.send({
            message: `${deleteCount} books were deleted successfully`,
        });
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while deleting all books")
        );
    }
}
