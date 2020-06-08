import * as express from "express";
import { BaseHttpController, controller, httpGet } from "inversify-express-utils";
import { TYPES } from "../shared/constants/types";
import { Sequelize } from "../shared/interfaces/Ioc";
import { inject } from "inversify";
import { News } from "../models/News";
import { User } from "../models/User";

@controller("/news", TYPES.AuthMiddleware)
export class NewsController extends BaseHttpController {
        private _sequelize: Sequelize;

        constructor (@inject(TYPES.Sequelize) sequelize: Sequelize) {
            super();
            this._sequelize = sequelize;
        }

        @httpGet("/")
        public async news (req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {
                const userRepository = await this._sequelize.getRepository(User);
                const content = await this._sequelize.getRepository(News)
                                      .findAll({ include: [userRepository] });
                return res.status(200).json(content);
        }
}
