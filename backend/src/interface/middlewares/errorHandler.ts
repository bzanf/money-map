import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "../../domain/errors/not-found-error";
import { ValidationError } from "../../domain/errors/validation-error";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof NotFoundError) {
        return res.status(404).json({ error: error.message });
    }

    if (error instanceof ValidationError) {
        return res.status(400).json({ error: error.message });
    }

    console.error("Unexpected error:", error);
    return res.status(500).json({ error: "An unexpected error occurred" });
}