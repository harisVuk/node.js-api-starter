import { inject } from "inversify";
import { TYPES } from "./types";

export const AppUtils = inject(TYPES.AppUtils);
export const AuthMiddleware = inject(TYPES.AuthMiddleware);
export const Sequelize = inject(TYPES.Sequelize);
