import { Container } from "inversify";
import { TYPES } from "../shared/constants/types";
import { AuthMiddleware } from "../shared/utils/auth";
import { AppUtils } from "../shared/utils/app.utils";
import { Sequelize } from "../shared/interfaces/Ioc";
import { sequelize } from "../shared/utils/app.config";

export class ContainerConfigLoader {
    public static Load (): Container {
        const container = new Container();
            container.bind<AppUtils>(TYPES.AppUtils).to(AppUtils);
            container.bind<Sequelize>(TYPES.Sequelize).toConstantValue(sequelize);
            container.bind<AuthMiddleware>(TYPES.AuthMiddleware).to(AuthMiddleware);
        return container;
    }
}
