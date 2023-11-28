import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const vaidateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            // data validation check
            await schema.parseAsync({ body: req.body });
            return next();
        } catch (err) {
            next(err)
        }
    }

}

export default vaidateRequest;