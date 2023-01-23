import { Request, Response, NextFunction } from "express";

import { addMovieSchema } from "../schemas/movies.schema";

import httpStatus from "http-status";

async function bodyAddMovieIsValid(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isValid = addMovieSchema.validate(req.body, { abortEarly: false });

  if (isValid.error) {
    const error = isValid.error.details.map((erro) => erro.message);
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error);
    return;
  }

  next();
}

export { bodyAddMovieIsValid };