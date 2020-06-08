import "reflect-metadata";
import * as bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import { ContainerConfigLoader } from "./config/container";
import "./controllers";
import cors from "cors";
import helmet from "helmet";
import { sequelize } from "./shared/utils/app.config";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";

const container = ContainerConfigLoader.Load();
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(cors());
    app.use(helmet());
});

(async () => {
  await sequelize.sync({ alter: true });
  const app = server.build();
  app.listen(3000);
})();