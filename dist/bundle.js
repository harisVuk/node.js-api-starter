/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const bodyParser = __importStar(__webpack_require__(/*! body-parser */ "body-parser"));
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const container_1 = __webpack_require__(/*! ./config/container */ "./src/config/container.ts");
__webpack_require__(/*! ./controllers */ "./src/controllers/index.ts");
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
const helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));
const app_config_1 = __webpack_require__(/*! ./shared/utils/app.config */ "./src/shared/utils/app.config.ts");
const swagger_ui_express_1 = __importDefault(__webpack_require__(/*! swagger-ui-express */ "swagger-ui-express"));
const swaggerDocument = __importStar(__webpack_require__(/*! ../swagger.json */ "./swagger.json"));
const container = container_1.ContainerConfigLoader.Load();
const server = new inversify_express_utils_1.InversifyExpressServer(container);
server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    app.use(cors_1.default());
    app.use(helmet_1.default());
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield app_config_1.sequelize.sync({ alter: true });
    const app = server.build();
    app.listen(3000);
}))();


/***/ }),

/***/ "./src/config/container.ts":
/*!*********************************!*\
  !*** ./src/config/container.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const types_1 = __webpack_require__(/*! ../shared/constants/types */ "./src/shared/constants/types.ts");
const auth_1 = __webpack_require__(/*! ../shared/utils/auth */ "./src/shared/utils/auth.ts");
const app_utils_1 = __webpack_require__(/*! ../shared/utils/app.utils */ "./src/shared/utils/app.utils.ts");
const app_config_1 = __webpack_require__(/*! ../shared/utils/app.config */ "./src/shared/utils/app.config.ts");
class ContainerConfigLoader {
    static Load() {
        const container = new inversify_1.Container();
        container.bind(types_1.TYPES.AppUtils).to(app_utils_1.AppUtils);
        container.bind(types_1.TYPES.Sequelize).toConstantValue(app_config_1.sequelize);
        container.bind(types_1.TYPES.AuthMiddleware).to(auth_1.AuthMiddleware);
        return container;
    }
}
exports.ContainerConfigLoader = ContainerConfigLoader;


/***/ }),

/***/ "./src/controllers/accountController.ts":
/*!**********************************************!*\
  !*** ./src/controllers/accountController.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(__webpack_require__(/*! express */ "express"));
const express_validator_1 = __webpack_require__(/*! express-validator */ "express-validator");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const types_1 = __webpack_require__(/*! ../shared/constants/types */ "./src/shared/constants/types.ts");
const appConf = __importStar(__webpack_require__(/*! ../shared/utils/app.config */ "./src/shared/utils/app.config.ts"));
const app_utils_1 = __webpack_require__(/*! ../shared/utils/app.utils */ "./src/shared/utils/app.utils.ts");
const User_1 = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
let AccountController = class AccountController extends inversify_express_utils_1.BaseHttpController {
    constructor(sequelize, appUtils) {
        super();
        this._sequelize = sequelize;
        this._appUtils = appUtils;
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = Object.assign({}, req.body);
                if (user) {
                    user.password = yield this._appUtils.hashPassword(req.body.password);
                    const content = yield this._sequelize.getRepository(User_1.User).create(user);
                    return res.status(200).json(content);
                }
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            try {
                if (!errors.isEmpty) {
                    return res.status(500).json({ message: "Fill field correctly" });
                }
                const credentials = Object.assign({}, req.body);
                if (credentials) {
                    const user = yield this._sequelize.getRepository(User_1.User).findOne({ where: { email: credentials.email } });
                    if (!user) {
                        return res.status(401).json({ message: "You are not authenticated!" });
                    }
                    const valid = yield this._appUtils.comparePasswords(credentials.password, user.password);
                    if (!valid) {
                        return res.status(401).json({ message: "You are not authenticated!" });
                    }
                    const content = yield this._appUtils.createToken(user.id);
                    const statusCode = 201;
                    return res.status(statusCode).json(content);
                }
            }
            catch (err) {
                return res.status(401).json({ message: err });
            }
        });
    }
};
__decorate([
    inversify_express_utils_1.httpPost("/register"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "register", null);
__decorate([
    inversify_express_utils_1.httpPost("/login", ...appConf.loginValidator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "login", null);
AccountController = __decorate([
    inversify_express_utils_1.controller("/account"),
    __param(0, inversify_1.inject(types_1.TYPES.Sequelize)),
    __param(1, inversify_1.inject(types_1.TYPES.AppUtils)),
    __metadata("design:paramtypes", [Object, app_utils_1.AppUtils])
], AccountController);
exports.AccountController = AccountController;


/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./accountController */ "./src/controllers/accountController.ts");
__webpack_require__(/*! ./newsController */ "./src/controllers/newsController.ts");


/***/ }),

/***/ "./src/controllers/newsController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/newsController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(__webpack_require__(/*! express */ "express"));
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const types_1 = __webpack_require__(/*! ../shared/constants/types */ "./src/shared/constants/types.ts");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const News_1 = __webpack_require__(/*! ../models/News */ "./src/models/News.ts");
const User_1 = __webpack_require__(/*! ../models/User */ "./src/models/User.ts");
let NewsController = class NewsController extends inversify_express_utils_1.BaseHttpController {
    constructor(sequelize) {
        super();
        this._sequelize = sequelize;
    }
    news(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = yield this._sequelize.getRepository(User_1.User);
            const content = yield this._sequelize.getRepository(News_1.News)
                .findAll({ include: [userRepository] });
            return res.status(200).json(content);
        });
    }
};
__decorate([
    inversify_express_utils_1.httpGet("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "news", null);
NewsController = __decorate([
    inversify_express_utils_1.controller("/news", types_1.TYPES.AuthMiddleware),
    __param(0, inversify_1.inject(types_1.TYPES.Sequelize)),
    __metadata("design:paramtypes", [Object])
], NewsController);
exports.NewsController = NewsController;


/***/ }),

/***/ "./src/models/News.ts":
/*!****************************!*\
  !*** ./src/models/News.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const User_1 = __webpack_require__(/*! ./User */ "./src/models/User.ts");
let News = class News extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], News.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], News.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], News.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], News.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], News.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.User),
    __metadata("design:type", User_1.User)
], News.prototype, "user", void 0);
News = __decorate([
    sequelize_typescript_1.Table({ tableName: "news" })
], News);
exports.News = News;


/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const News_1 = __webpack_require__(/*! ./News */ "./src/models/News.ts");
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], User.prototype, "creationDate", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => News_1.News),
    __metadata("design:type", Array)
], User.prototype, "news", void 0);
User = __decorate([
    sequelize_typescript_1.Table({ tableName: "users" })
], User);
exports.User = User;


/***/ }),

/***/ "./src/shared/constants/types.ts":
/*!***************************************!*\
  !*** ./src/shared/constants/types.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = {
    AppUtils: Symbol.for("AppUtils"),
    AuthMiddleware: Symbol.for("AuthMiddleware"),
    Sequelize: Symbol.for("Sequelize")
};


/***/ }),

/***/ "./src/shared/utils/app.config.ts":
/*!****************************************!*\
  !*** ./src/shared/utils/app.config.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const express_validator_1 = __webpack_require__(/*! express-validator */ "express-validator");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const User_1 = __webpack_require__(/*! ../../models/User */ "./src/models/User.ts");
const News_1 = __webpack_require__(/*! ../../models/News */ "./src/models/News.ts");
dotenv_1.default.config();
exports.loginValidator = [express_validator_1.check("email", "Email is required").exists(),
    express_validator_1.check("email", "Email Invalid").isEmail(),
    express_validator_1.check("password", "Password is required").exists()
];
const _sequelize = {
    database: process.env.DB,
    dialect: process.env.DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    repositoryMode: true,
    models: [User_1.User, News_1.News]
};
exports.sequelize = new sequelize_typescript_1.Sequelize(_sequelize);


/***/ }),

/***/ "./src/shared/utils/app.utils.ts":
/*!***************************************!*\
  !*** ./src/shared/utils/app.utils.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const bcrypt = __importStar(__webpack_require__(/*! bcryptjs */ "bcryptjs"));
const jwt_simple_1 = __webpack_require__(/*! jwt-simple */ "jwt-simple");
let AppUtils = class AppUtils {
    constructor() {
        this.saltRounds = 10;
    }
    hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, this.saltRounds, function (err, hash) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(hash);
                }
            });
        });
    }
    comparePasswords(password, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, function (err, res) {
                if (err) {
                    reject(err);
                }
                else if (res) {
                    resolve(res);
                }
            });
        });
    }
    createToken(id) {
        return new Promise((resolve, reject) => {
            const payload = { sub: id };
            const token = jwt_simple_1.encode(payload, "123");
            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 120);
            const result = { token: token, expires_at: new Date(expires).getTime() };
            resolve(result);
        });
    }
};
AppUtils = __decorate([
    inversify_1.injectable()
], AppUtils);
exports.AppUtils = AppUtils;


/***/ }),

/***/ "./src/shared/utils/auth.ts":
/*!**********************************!*\
  !*** ./src/shared/utils/auth.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const inversify_express_utils_1 = __webpack_require__(/*! inversify-express-utils */ "inversify-express-utils");
const jwt_simple_1 = __webpack_require__(/*! jwt-simple */ "jwt-simple");
let AuthMiddleware = class AuthMiddleware extends inversify_express_utils_1.BaseMiddleware {
    handler(req, res, next) {
        const valid = req.header("authorization");
        if (!valid) {
            return res.status(401).json({ message: "You are not authenticated!" });
        }
        const token = req.header("authorization").split(" ")[1];
        const payload = jwt_simple_1.decode(token, "123");
        if (!payload) {
            return res.status(401).json({ message: "You are not authenticated!" });
        }
        next();
    }
};
AuthMiddleware = __decorate([
    inversify_1.injectable()
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;


/***/ }),

/***/ "./swagger.json":
/*!**********************!*\
  !*** ./swagger.json ***!
  \**********************/
/*! exports provided: openapi, info, schemes, tags, components, security, produces, paths, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"openapi\":\"3.0.0\",\"info\":{\"version\":\"1.0.0\",\"title\":\"News rest api\",\"description\":\"Token: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MTI.7j2VMlXRjovr1sI23Vn4MRwkxuIC38eX8sv65UBZL1U\",\"license\":{\"name\":\"MIT\",\"url\":\"https://opensource.org/licenses/MIT\"}},\"schemes\":[\"http\"],\"tags\":[{\"name\":\"News\"}],\"components\":{\"securitySchemes\":{\"bearerAuth\":{\"type\":\"http\",\"scheme\":\"bearer\",\"bearerFormat\":\"JWT\"}}},\"security\":[{\"bearerAuth\":[]}],\"produces\":[\"application/json\"],\"paths\":{\"/news\":{\"get\":{\"tags\":[\"News\"],\"security\":[{\"bearerAuth\":[]}],\"summary\":\"Get all news in system\",\"responses\":{\"200\":{\"description\":\"Success\"},\"401\":{\"description\":\"Unauthorized\"}}}}}}");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "inversify-express-utils":
/*!******************************************!*\
  !*** external "inversify-express-utils" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify-express-utils");

/***/ }),

/***/ "jwt-simple":
/*!*****************************!*\
  !*** external "jwt-simple" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-simple");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIiwiQzpcXFVzZXJzXFxIYXJpc1xcRGVza3RvcFxccHJvamVjdHNcXFBvcnRvZm9saW9cXE5vZGVKc1xcc3JjXFxhcHAudHMiLCJDOlxcVXNlcnNcXEhhcmlzXFxEZXNrdG9wXFxwcm9qZWN0c1xcUG9ydG9mb2xpb1xcTm9kZUpzXFxzcmNcXGNvbmZpZ1xcY29udGFpbmVyLnRzIiwiQzpcXFVzZXJzXFxIYXJpc1xcRGVza3RvcFxccHJvamVjdHNcXFBvcnRvZm9saW9cXE5vZGVKc1xcc3JjXFxjb250cm9sbGVyc1xcYWNjb3VudENvbnRyb2xsZXIudHMiLCJDOlxcVXNlcnNcXEhhcmlzXFxEZXNrdG9wXFxwcm9qZWN0c1xcUG9ydG9mb2xpb1xcTm9kZUpzXFxzcmNcXGNvbnRyb2xsZXJzXFxpbmRleC50cyIsIkM6XFxVc2Vyc1xcSGFyaXNcXERlc2t0b3BcXHByb2plY3RzXFxQb3J0b2ZvbGlvXFxOb2RlSnNcXHNyY1xcY29udHJvbGxlcnNcXG5ld3NDb250cm9sbGVyLnRzIiwiQzpcXFVzZXJzXFxIYXJpc1xcRGVza3RvcFxccHJvamVjdHNcXFBvcnRvZm9saW9cXE5vZGVKc1xcc3JjXFxtb2RlbHNcXE5ld3MudHMiLCJDOlxcVXNlcnNcXEhhcmlzXFxEZXNrdG9wXFxwcm9qZWN0c1xcUG9ydG9mb2xpb1xcTm9kZUpzXFxzcmNcXG1vZGVsc1xcVXNlci50cyIsIkM6XFxVc2Vyc1xcSGFyaXNcXERlc2t0b3BcXHByb2plY3RzXFxQb3J0b2ZvbGlvXFxOb2RlSnNcXHNyY1xcc2hhcmVkXFxjb25zdGFudHNcXHR5cGVzLnRzIiwiQzpcXFVzZXJzXFxIYXJpc1xcRGVza3RvcFxccHJvamVjdHNcXFBvcnRvZm9saW9cXE5vZGVKc1xcc3JjXFxzaGFyZWRcXHV0aWxzXFxhcHAuY29uZmlnLnRzIiwiQzpcXFVzZXJzXFxIYXJpc1xcRGVza3RvcFxccHJvamVjdHNcXFBvcnRvZm9saW9cXE5vZGVKc1xcc3JjXFxzaGFyZWRcXHV0aWxzXFxhcHAudXRpbHMudHMiLCJDOlxcVXNlcnNcXEhhcmlzXFxEZXNrdG9wXFxwcm9qZWN0c1xcUG9ydG9mb2xpb1xcTm9kZUpzXFxzcmNcXHNoYXJlZFxcdXRpbHNcXGF1dGgudHMiLCJleHRlcm5hbCBcImJjcnlwdGpzXCIiLCJleHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJleHRlcm5hbCBcImNvcnNcIiIsImV4dGVybmFsIFwiZG90ZW52XCIiLCJleHRlcm5hbCBcImV4cHJlc3NcIiIsImV4dGVybmFsIFwiZXhwcmVzcy12YWxpZGF0b3JcIiIsImV4dGVybmFsIFwiaGVsbWV0XCIiLCJleHRlcm5hbCBcImludmVyc2lmeVwiIiwiZXh0ZXJuYWwgXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiIiwiZXh0ZXJuYWwgXCJqd3Qtc2ltcGxlXCIiLCJleHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsImV4dGVybmFsIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIiIsImV4dGVybmFsIFwic3dhZ2dlci11aS1leHByZXNzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxnRUFBMEI7QUFDMUIsdUZBQTBDO0FBQzFDLGdIQUFpRTtBQUNqRSwrRkFBMkQ7QUFDM0QsdUVBQXVCO0FBQ3ZCLHdFQUF3QjtBQUN4Qiw4RUFBNEI7QUFDNUIsOEdBQXNEO0FBQ3RELGtIQUEyQztBQUMzQyxtR0FBbUQ7QUFFbkQsTUFBTSxTQUFTLEdBQUcsaUNBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxnREFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVyRCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDckIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzVCLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDSixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLDRCQUFTLENBQUMsS0FBSyxFQUFFLDRCQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sRUFBRSxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxDQUFDLEdBQVMsRUFBRTtJQUNWLE1BQU0sc0JBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0QyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixDQUFDLEVBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1Qkwsc0VBQXNDO0FBQ3RDLHdHQUFrRDtBQUNsRCw2RkFBc0Q7QUFDdEQsNEdBQXFEO0FBRXJELCtHQUF1RDtBQUV2RCxNQUFhLHFCQUFxQjtJQUN2QixNQUFNLENBQUMsSUFBSTtRQUNkLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxJQUFJLENBQVcsYUFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvQkFBUSxDQUFDLENBQUM7UUFDdEQsU0FBUyxDQUFDLElBQUksQ0FBWSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQztRQUN0RSxTQUFTLENBQUMsSUFBSSxDQUFpQixhQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLHFCQUFjLENBQUMsQ0FBQztRQUM1RSxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFSRCxzREFRQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZELDRFQUFtQztBQUNuQyw4RkFBcUQ7QUFDckQsc0VBQW1DO0FBQ25DLGdIQUFtRjtBQUNuRix3R0FBa0Q7QUFDbEQsd0hBQXNEO0FBQ3RELDRHQUFxRDtBQUNyRCxpRkFBc0M7QUFLdEMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBa0IsU0FBUSw0Q0FBa0I7SUFJckQsWUFDNkIsU0FBb0IsRUFDckIsUUFBa0I7UUFFMUMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBR1ksUUFBUSxDQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDMUYsSUFBSTtnQkFDSSxNQUFNLElBQUksR0FBVSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BELElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNyRSxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDekM7YUFDSDtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNOLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDeEM7UUFDTCxDQUFDO0tBQUE7SUFHWSxLQUFLLENBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUMvRSxNQUFNLE1BQU0sR0FBRyxvQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJO2dCQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO29CQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztpQkFDcEU7Z0JBQ0csTUFBTSxXQUFXLEdBQWlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDeEcsSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDUCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQztxQkFDMUU7b0JBQ0csTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RixJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO3FCQUMxRTtvQkFDRCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMUQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDO29CQUN2QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQzthQUNKO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ04sT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ3JEO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUF0Q0c7SUFEQyxrQ0FBUSxDQUFDLFdBQVcsQ0FBQzs7OztpREFZckI7QUFHRDtJQURDLGtDQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQzs7Ozs4Q0F3QjdDO0FBbkRRLGlCQUFpQjtJQUQ3QixvQ0FBVSxDQUFDLFVBQVUsQ0FBQztJQU1kLDZCQUFNLENBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQztJQUN2Qiw2QkFBTSxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUM7NkNBQVcsb0JBQVE7R0FOckMsaUJBQWlCLENBb0Q3QjtBQXBEWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7OztBQ1o5Qix5RkFBNkI7QUFDN0IsbUZBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRDFCLDRFQUFtQztBQUNuQyxnSEFBa0Y7QUFDbEYsd0dBQWtEO0FBRWxELHNFQUFtQztBQUNuQyxpRkFBc0M7QUFDdEMsaUZBQXNDO0FBR3RDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWUsU0FBUSw0Q0FBa0I7SUFHOUMsWUFBc0MsU0FBb0I7UUFDdEQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBR1ksSUFBSSxDQUFFLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDbEYsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFJLENBQUMsQ0FBQztZQUNqRSxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQUksQ0FBQztpQkFDbEMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsQ0FBQztLQUFBO0NBQ1I7QUFOTztJQURDLGlDQUFPLENBQUMsR0FBRyxDQUFDOzs7OzBDQU1aO0FBZEksY0FBYztJQUQxQixvQ0FBVSxDQUFDLE9BQU8sRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDO0lBSXBCLDZCQUFNLENBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQzs7R0FIaEMsY0FBYyxDQWUxQjtBQWZZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUM0IsdUdBQXlHO0FBQ3pHLHlFQUE4QjtBQUc5QixJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsNEJBQVc7Q0FtQnBDO0FBakJDO0lBREMsNkJBQU07O21DQUNPO0FBR2Q7SUFEQyw2QkFBTTs7eUNBQ2E7QUFHcEI7SUFEQyxnQ0FBUzs4QkFDSSxJQUFJOzBDQUFDO0FBR25CO0lBREMsZ0NBQVM7OEJBQ0MsSUFBSTt1Q0FBQztBQUloQjtJQUZDLGlDQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBSSxDQUFDO0lBQ3RCLDZCQUFNOztvQ0FDUTtBQUdmO0lBREMsZ0NBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFJLENBQUM7OEJBQ2hCLFdBQUk7a0NBQUM7QUFsQkEsSUFBSTtJQURoQiw0QkFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ2hCLElBQUksQ0FtQmhCO0FBbkJZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKakIsdUdBQTJGO0FBQzNGLHlFQUE4QjtBQUc5QixJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsNEJBQVc7Q0FxQnBDO0FBbkJDO0lBREMsNkJBQU07O3VDQUNXO0FBR2xCO0lBREMsNkJBQU07O3NDQUNVO0FBR2pCO0lBREMsNkJBQU07O3NDQUNVO0FBR2pCO0lBREMsNkJBQU07O21DQUNPO0FBR2Q7SUFEQyxnQ0FBUzs4QkFDSSxJQUFJOzBDQUFDO0FBR25CO0lBREMsZ0NBQVM7OEJBQ0MsSUFBSTt1Q0FBQztBQUdoQjtJQURDLDhCQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBSSxDQUFDOztrQ0FDUDtBQXBCRixJQUFJO0lBRGhCLDRCQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUM7R0FDakIsSUFBSSxDQXFCaEI7QUFyQlksb0JBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ0pKLGFBQUssR0FBRztJQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDaEMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7SUFDNUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0NBQ3JDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pGLDhFQUE0QjtBQUM1Qiw4RkFBMEM7QUFDMUMsdUdBQW1FO0FBQ25FLG9GQUF5QztBQUN6QyxvRkFBeUM7QUFFekMsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVILHNCQUFjLEdBQUcsQ0FBQyx5QkFBSyxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLE1BQU0sRUFBRTtJQUM3Qyx5QkFBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQyxPQUFPLEVBQUU7SUFDekMseUJBQUssQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLEVBQUU7Q0FDakQsQ0FBQztBQUVoQyxNQUFNLFVBQVUsR0FBcUI7SUFDL0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtJQUN4QixPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFrQjtJQUN2QyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQ3pCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDN0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUM3QixjQUFjLEVBQUUsSUFBSTtJQUNwQixNQUFNLEVBQUUsQ0FBQyxXQUFJLEVBQUUsV0FBSSxDQUFDO0NBQ3pCLENBQUM7QUFFVyxpQkFBUyxHQUFHLElBQUksZ0NBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbkQsc0VBQXVDO0FBRXZDLDZFQUFtQztBQUNuQyx5RUFBb0M7QUFHcEMsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUTtJQUFyQjtRQUNBLGVBQVUsR0FBRyxFQUFFLENBQUM7SUFvQ2YsQ0FBQztJQWxDUyxZQUFZLENBQUUsUUFBZ0I7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7Z0JBQ3RELElBQUksR0FBRyxFQUFFO29CQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFTyxnQkFBZ0IsQ0FBRSxRQUFnQixFQUFFLElBQVk7UUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRztnQkFDN0MsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNmO3FCQUFNLElBQUksR0FBRyxFQUFFO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFdBQVcsQ0FBRSxFQUFVO1FBQzFCLE9BQU8sSUFBSSxPQUFPLENBQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDeEMsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDNUIsTUFBTSxLQUFLLEdBQUcsbUJBQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMvQyxNQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDekUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNMO0FBckNXLFFBQVE7SUFEcEIsc0JBQVUsRUFBRTtHQUNBLFFBQVEsQ0FxQ25CO0FBckNXLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckIsc0VBQXVDO0FBQ3ZDLGdIQUF5RDtBQUN6RCx5RUFBb0M7QUFHcEMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLHdDQUFjO0lBQzNDLE9BQU8sQ0FDTixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjtRQUMxQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQztTQUMxRTtRQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhELE1BQU0sT0FBTyxHQUFHLG1CQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztDQUNKO0FBbEJZLGNBQWM7SUFEMUIsc0JBQVUsRUFBRTtHQUNBLGNBQWMsQ0FrQjFCO0FBbEJZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04zQixxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAudHNcIik7XG4iLCJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XHJcbmltcG9ydCB7IEludmVyc2lmeUV4cHJlc3NTZXJ2ZXIgfSBmcm9tIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyQ29uZmlnTG9hZGVyIH0gZnJvbSBcIi4vY29uZmlnL2NvbnRhaW5lclwiO1xyXG5pbXBvcnQgXCIuL2NvbnRyb2xsZXJzXCI7XHJcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcbmltcG9ydCBoZWxtZXQgZnJvbSBcImhlbG1ldFwiO1xyXG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi9zaGFyZWQvdXRpbHMvYXBwLmNvbmZpZ1wiO1xyXG5pbXBvcnQgc3dhZ2dlclVpIGZyb20gXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIjtcclxuaW1wb3J0ICogYXMgc3dhZ2dlckRvY3VtZW50IGZyb20gXCIuLi9zd2FnZ2VyLmpzb25cIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IENvbnRhaW5lckNvbmZpZ0xvYWRlci5Mb2FkKCk7XHJcbmNvbnN0IHNlcnZlciA9IG5ldyBJbnZlcnNpZnlFeHByZXNzU2VydmVyKGNvbnRhaW5lcik7XHJcblxyXG5zZXJ2ZXIuc2V0Q29uZmlnKChhcHApID0+IHtcclxuICAgIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcclxuICAgICAgZXh0ZW5kZWQ6IHRydWVcclxuICAgIH0pKTtcclxuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG4gICAgYXBwLnVzZShcIi9zd2FnZ2VyXCIsIHN3YWdnZXJVaS5zZXJ2ZSwgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJEb2N1bWVudCkpO1xyXG4gICAgYXBwLnVzZShjb3JzKCkpO1xyXG4gICAgYXBwLnVzZShoZWxtZXQoKSk7XHJcbn0pO1xyXG5cclxuKGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGFsdGVyOiB0cnVlIH0pO1xyXG4gIGNvbnN0IGFwcCA9IHNlcnZlci5idWlsZCgpO1xyXG4gIGFwcC5saXN0ZW4oMzAwMCk7XHJcbn0pKCk7IiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gXCIuLi9zaGFyZWQvY29uc3RhbnRzL3R5cGVzXCI7XHJcbmltcG9ydCB7IEF1dGhNaWRkbGV3YXJlIH0gZnJvbSBcIi4uL3NoYXJlZC91dGlscy9hdXRoXCI7XHJcbmltcG9ydCB7IEFwcFV0aWxzIH0gZnJvbSBcIi4uL3NoYXJlZC91dGlscy9hcHAudXRpbHNcIjtcclxuaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lvY1wiO1xyXG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vc2hhcmVkL3V0aWxzL2FwcC5jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb25maWdMb2FkZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkICgpOiBDb250YWluZXIge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmJpbmQ8QXBwVXRpbHM+KFRZUEVTLkFwcFV0aWxzKS50byhBcHBVdGlscyk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5iaW5kPFNlcXVlbGl6ZT4oVFlQRVMuU2VxdWVsaXplKS50b0NvbnN0YW50VmFsdWUoc2VxdWVsaXplKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmJpbmQ8QXV0aE1pZGRsZXdhcmU+KFRZUEVTLkF1dGhNaWRkbGV3YXJlKS50byhBdXRoTWlkZGxld2FyZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRpb25SZXN1bHQgfSBmcm9tIFwiZXhwcmVzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBCYXNlSHR0cENvbnRyb2xsZXIsIGNvbnRyb2xsZXIsIGh0dHBQb3N0IH0gZnJvbSBcImludmVyc2lmeS1leHByZXNzLXV0aWxzXCI7XHJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSBcIi4uL3NoYXJlZC9jb25zdGFudHMvdHlwZXNcIjtcclxuaW1wb3J0ICogYXMgYXBwQ29uZiBmcm9tIFwiLi4vc2hhcmVkL3V0aWxzL2FwcC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwVXRpbHMgfSBmcm9tIFwiLi4vc2hhcmVkL3V0aWxzL2FwcC51dGlsc1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7IElVc2VyLCBJQ3JlZGVudGlhbHMgfSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvSVVzZXJcIjtcclxuaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSBcIi4uL3NoYXJlZC9pbnRlcmZhY2VzL0lvY1wiO1xyXG5cclxuQGNvbnRyb2xsZXIoXCIvYWNjb3VudFwiKVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudENvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlSHR0cENvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBfc2VxdWVsaXplOiBTZXF1ZWxpemU7XHJcbiAgICBwcml2YXRlIF9hcHBVdGlsczogQXBwVXRpbHM7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIEBpbmplY3QoVFlQRVMuU2VxdWVsaXplKSBzZXF1ZWxpemU6IFNlcXVlbGl6ZSxcclxuICAgICAgICBAaW5qZWN0KFRZUEVTLkFwcFV0aWxzKSBhcHBVdGlsczogQXBwVXRpbHNcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc2VxdWVsaXplID0gc2VxdWVsaXplO1xyXG4gICAgICAgIHRoaXMuX2FwcFV0aWxzID0gYXBwVXRpbHM7XHJcbiAgICB9XHJcblxyXG4gICAgQGh0dHBQb3N0KFwiL3JlZ2lzdGVyXCIpXHJcbiAgICBwdWJsaWMgYXN5bmMgcmVnaXN0ZXIgKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcjogSVVzZXIgPSBPYmplY3QuYXNzaWduKHt9LCByZXEuYm9keSk7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnBhc3N3b3JkID0gYXdhaXQgdGhpcy5fYXBwVXRpbHMuaGFzaFBhc3N3b3JkKHJlcS5ib2R5LnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLl9zZXF1ZWxpemUuZ2V0UmVwb3NpdG9yeShVc2VyKS5jcmVhdGUodXNlcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oY29udGVudCk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBodHRwUG9zdChcIi9sb2dpblwiLCAuLi5hcHBDb25mLmxvZ2luVmFsaWRhdG9yKVxyXG4gICAgcHVibGljIGFzeW5jIGxvZ2luIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0aW9uUmVzdWx0KHJlcSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFlcnJvcnMuaXNFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJGaWxsIGZpZWxkIGNvcnJlY3RseVwiIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVkZW50aWFsczogSUNyZWRlbnRpYWxzID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxLmJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLl9zZXF1ZWxpemUuZ2V0UmVwb3NpdG9yeShVc2VyKS5maW5kT25lKHsgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIllvdSBhcmUgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBhd2FpdCB0aGlzLl9hcHBVdGlscy5jb21wYXJlUGFzc3dvcmRzKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIllvdSBhcmUgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5fYXBwVXRpbHMuY3JlYXRlVG9rZW4odXNlci5pZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gMjAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoc3RhdHVzQ29kZSkuanNvbihjb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogZXJyIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgXCIuL2FjY291bnRDb250cm9sbGVyXCI7XHJcbmltcG9ydCBcIi4vbmV3c0NvbnRyb2xsZXJcIjtcclxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBCYXNlSHR0cENvbnRyb2xsZXIsIGNvbnRyb2xsZXIsIGh0dHBHZXQgfSBmcm9tIFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIjtcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbnN0YW50cy90eXBlc1wiO1xyXG5pbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tIFwiLi4vc2hhcmVkL2ludGVyZmFjZXMvSW9jXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gXCIuLi9tb2RlbHMvTmV3c1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XHJcblxyXG5AY29udHJvbGxlcihcIi9uZXdzXCIsIFRZUEVTLkF1dGhNaWRkbGV3YXJlKVxyXG5leHBvcnQgY2xhc3MgTmV3c0NvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlSHR0cENvbnRyb2xsZXIge1xyXG4gICAgICAgIHByaXZhdGUgX3NlcXVlbGl6ZTogU2VxdWVsaXplO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvciAoQGluamVjdChUWVBFUy5TZXF1ZWxpemUpIHNlcXVlbGl6ZTogU2VxdWVsaXplKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBodHRwR2V0KFwiL1wiKVxyXG4gICAgICAgIHB1YmxpYyBhc3luYyBuZXdzIChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUmVwb3NpdG9yeSA9IGF3YWl0IHRoaXMuX3NlcXVlbGl6ZS5nZXRSZXBvc2l0b3J5KFVzZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuX3NlcXVlbGl6ZS5nZXRSZXBvc2l0b3J5KE5ld3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmRBbGwoeyBpbmNsdWRlOiBbdXNlclJlcG9zaXRvcnldIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2RlbCwgVGFibGUsIENvbHVtbiwgQ3JlYXRlZEF0LCBVcGRhdGVkQXQsIEZvcmVpZ25LZXksIEJlbG9uZ3NUbyB9IGZyb20gXCJzZXF1ZWxpemUtdHlwZXNjcmlwdFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5cclxuQFRhYmxlKHsgdGFibGVOYW1lOiBcIm5ld3NcIiB9KVxyXG5leHBvcnQgY2xhc3MgTmV3cyBleHRlbmRzIE1vZGVsPE5ld3M+IHtcclxuICBAQ29sdW1uXHJcbiAgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgQENvbHVtblxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBDcmVhdGVkQXRcclxuICBjcmVhdGlvbkRhdGU6IERhdGU7XHJcblxyXG4gIEBVcGRhdGVkQXRcclxuICB1cGRhdGVkQXQ6IERhdGU7XHJcblxyXG4gIEBGb3JlaWduS2V5KCgpID0+IFVzZXIpXHJcbiAgQENvbHVtblxyXG4gIHVzZXJJZDogbnVtYmVyO1xyXG5cclxuICBAQmVsb25nc1RvKCgpID0+IFVzZXIpXHJcbiAgdXNlcjogVXNlcjtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RlbCwgVGFibGUsIENvbHVtbiwgQ3JlYXRlZEF0LCBVcGRhdGVkQXQsIEhhc01hbnkgfSBmcm9tIFwic2VxdWVsaXplLXR5cGVzY3JpcHRcIjtcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gXCIuL05ld3NcIjtcclxuXHJcbkBUYWJsZSh7IHRhYmxlTmFtZTogXCJ1c2Vyc1wiIH0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWw8VXNlcj4ge1xyXG4gIEBDb2x1bW5cclxuICBmaXJzdG5hbWU6IHN0cmluZztcclxuXHJcbiAgQENvbHVtblxyXG4gIGxhc3RuYW1lOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW5cclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uXHJcbiAgZW1haWw6IHN0cmluZztcclxuXHJcbiAgQENyZWF0ZWRBdFxyXG4gIGNyZWF0aW9uRGF0ZTogRGF0ZTtcclxuXHJcbiAgQFVwZGF0ZWRBdFxyXG4gIHVwZGF0ZWRBdDogRGF0ZTtcclxuXHJcbiAgQEhhc01hbnkoKCkgPT4gTmV3cylcclxuICBuZXdzOiBOZXdzW107XHJcbn0iLCJleHBvcnQgY29uc3QgVFlQRVMgPSB7XHJcbiAgICBBcHBVdGlsczogU3ltYm9sLmZvcihcIkFwcFV0aWxzXCIpLFxyXG4gICAgQXV0aE1pZGRsZXdhcmU6IFN5bWJvbC5mb3IoXCJBdXRoTWlkZGxld2FyZVwiKSxcclxuICAgIFNlcXVlbGl6ZTogU3ltYm9sLmZvcihcIlNlcXVlbGl6ZVwiKVxyXG59O1xyXG4iLCJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcclxuaW1wb3J0IHsgY2hlY2sgfSBmcm9tIFwiZXhwcmVzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgU2VxdWVsaXplT3B0aW9ucywgU2VxdWVsaXplIH0gZnJvbSBcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IHsgTmV3cyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvTmV3c1wiO1xyXG5pbXBvcnQgeyBEaWFsZWN0IH0gZnJvbSBcInNlcXVlbGl6ZS90eXBlc1wiO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5WYWxpZGF0b3IgPSBbY2hlY2soXCJlbWFpbFwiLCBcIkVtYWlsIGlzIHJlcXVpcmVkXCIpLmV4aXN0cygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayhcImVtYWlsXCIsIFwiRW1haWwgSW52YWxpZFwiKS5pc0VtYWlsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrKFwicGFzc3dvcmRcIiwgXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiKS5leGlzdHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuY29uc3QgX3NlcXVlbGl6ZTogU2VxdWVsaXplT3B0aW9ucyA9IHtcclxuICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCLFxyXG4gICAgICBkaWFsZWN0OiBwcm9jZXNzLmVudi5ESUFMRUNUIGFzIERpYWxlY3QsXHJcbiAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgICAgcmVwb3NpdG9yeU1vZGU6IHRydWUsXHJcbiAgICAgIG1vZGVsczogW1VzZXIsIE5ld3NdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShfc2VxdWVsaXplKTtcclxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgSUNyZWRlbnRpYWxzIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL0lVc2VyXCI7XHJcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgZW5jb2RlIH0gZnJvbSBcImp3dC1zaW1wbGVcIjtcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcFV0aWxzIHtcclxuc2FsdFJvdW5kcyA9IDEwO1xyXG5cclxuICAgIHB1YmxpYyBoYXNoUGFzc3dvcmQgKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCB0aGlzLnNhbHRSb3VuZHMsIGZ1bmN0aW9uIChlcnIsIGhhc2gpIHtcclxuICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoaGFzaCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgcHVibGljIGNvbXBhcmVQYXNzd29yZHMgKHBhc3N3b3JkOiBzdHJpbmcsIGhhc2g6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgaGFzaCwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGNyZWF0ZVRva2VuIChpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0geyBzdWI6IGlkIH07XHJcbiAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBlbmNvZGUocGF5bG9hZCwgXCIxMjNcIik7XHJcbiAgICAgICAgICAgICAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgZXhwaXJlcy5zZXRNaW51dGVzKGV4cGlyZXMuZ2V0TWludXRlcygpICsgMTIwKTtcclxuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHRva2VuOiB0b2tlbiwgZXhwaXJlc19hdDogbmV3IERhdGUoZXhwaXJlcykuZ2V0VGltZSgpIH07XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuIH1cclxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSBcImludmVyc2lmeVwiO1xyXG5pbXBvcnQgeyBCYXNlTWlkZGxld2FyZSB9IGZyb20gXCJpbnZlcnNpZnktZXhwcmVzcy11dGlsc1wiO1xyXG5pbXBvcnQgeyBkZWNvZGUgfSBmcm9tIFwiand0LXNpbXBsZVwiO1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aE1pZGRsZXdhcmUgZXh0ZW5kcyBCYXNlTWlkZGxld2FyZSB7XHJcbnB1YmxpYyBoYW5kbGVyIChcclxuICAgICAgICByZXE6IGV4cHJlc3MuUmVxdWVzdCxcclxuICAgICAgICByZXM6IGV4cHJlc3MuUmVzcG9uc2UsXHJcbiAgICAgICAgbmV4dDogZXhwcmVzcy5OZXh0RnVuY3Rpb24pIHtcclxuICAgICAgICBjb25zdCB2YWxpZCA9IHJlcS5oZWFkZXIoXCJhdXRob3JpemF0aW9uXCIpO1xyXG4gICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkIVwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVyKFwiYXV0aG9yaXphdGlvblwiKS5zcGxpdChcIiBcIilbMV07XHJcblxyXG4gICAgICAgICBjb25zdCBwYXlsb2FkID0gZGVjb2RlKHRva2VuLCBcIjEyM1wiKTtcclxuXHJcbiAgICAgICAgIGlmICghcGF5bG9hZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIllvdSBhcmUgbm90IGF1dGhlbnRpY2F0ZWQhXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHQoKTtcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnZlcnNpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52ZXJzaWZ5LWV4cHJlc3MtdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LXNpbXBsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3YWdnZXItdWktZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9