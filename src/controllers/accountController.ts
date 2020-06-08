import * as express from "express";
import { validationResult } from "express-validator";
import { inject } from "inversify";
import { BaseHttpController, controller, httpPost } from "inversify-express-utils";
import { TYPES } from "../shared/constants/types";
import * as appConf from "../shared/utils/app.config";
import { AppUtils } from "../shared/utils/app.utils";
import { User } from "../models/User";
import { IUser, ICredentials } from "../shared/interfaces/IUser";
import { Sequelize } from "../shared/interfaces/Ioc";

@controller("/account")
export class AccountController extends BaseHttpController {
    private _sequelize: Sequelize;
    private _appUtils: AppUtils;

    constructor (
        @inject(TYPES.Sequelize) sequelize: Sequelize,
        @inject(TYPES.AppUtils) appUtils: AppUtils
    ) {
        super();
        this._sequelize = sequelize;
        this._appUtils = appUtils;
    }

    @httpPost("/register")
    public async register (req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
        try {
                const user: IUser = Object.assign({}, req.body);
            if (user) {
                user.password = await this._appUtils.hashPassword(req.body.password);
                const content = await this._sequelize.getRepository(User).create(user);
                return res.status(200).json(content);
           }
        } catch (err) {
                return res.status(500).json(err);
        }
    }

    @httpPost("/login", ...appConf.loginValidator)
    public async login (req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
                const errors = validationResult(req);
        try {
            if (!errors.isEmpty) {
                return res.status(500).json({ message: "Fill field correctly" });
            }
                const credentials: ICredentials = Object.assign({}, req.body);
            if (credentials) {
                const user = await this._sequelize.getRepository(User).findOne({ where: { email: credentials.email } });
                if (!user) {
                    return res.status(401).json({ message: "You are not authenticated!" });
                }
                    const valid = await this._appUtils.comparePasswords(credentials.password, user.password);
                if (!valid) {
                    return res.status(401).json({ message: "You are not authenticated!" });
                }
                const content = await this._appUtils.createToken(user.id);
                const statusCode = 201;
                return res.status(statusCode).json(content);
            }
        } catch (err) {
                return res.status(401).json({ message: err });
        }
    }
}
