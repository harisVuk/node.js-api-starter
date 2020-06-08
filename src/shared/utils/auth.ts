import * as express from "express";
import { injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import { decode } from "jwt-simple";

@injectable()
export class AuthMiddleware extends BaseMiddleware {
public handler (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction) {
        const valid = req.header("authorization");
        if (!valid) {
            return res.status(401).json({ message: "You are not authenticated!" });
        }
         const token = req.header("authorization").split(" ")[1];

         const payload = decode(token, "123");

         if (!payload) {
            return res.status(401).json({ message: "You are not authenticated!" });
        }
        next();
    }
}
