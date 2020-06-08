import dotenv from "dotenv";
import { check } from "express-validator";
import { SequelizeOptions, Sequelize } from "sequelize-typescript";
import { User } from "../../models/User";
import { News } from "../../models/News";
import { Dialect } from "sequelize/types";
dotenv.config();

export const loginValidator = [check("email", "Email is required").exists(),
                              check("email", "Email Invalid").isEmail(),
                              check("password", "Password is required").exists()
                              ];

const _sequelize: SequelizeOptions = {
      database: process.env.DB,
      dialect: process.env.DIALECT as Dialect,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      repositoryMode: true,
      models: [User, News]
};

export const sequelize = new Sequelize(_sequelize);
