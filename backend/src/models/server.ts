import cors from "cors";
import { AppRouter } from "../routes/url.router";
import { AppConfig } from "./config";
import express, { Express } from "express";
import { DBConnectionProvider } from "../providers/db.provider";
import { initDBService } from "../services/init-db.service";
import { URLRequest, URLResponse } from "./interfaces/global.interface";

export class AppServer {
    public app: Express;
    private config: AppConfig;
    
    constructor() {
    }

    public async init() {
        this.setConfig();
        await this.initDB();
        this.setApp();
        this.setMiddlewares();
        this.setBaseRoutes();
        this.setRouter();
    }

    private async initDB() {
        DBConnectionProvider.createPool(this.config.db);
        const init_db_service = new initDBService();
        await init_db_service.init();
    };

    private setConfig() {
        this.config = new AppConfig();
    }

    private setApp() {
        this.app = express();
    }

    private setMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use((req: URLRequest, res: URLResponse, next) => {
            req.base_redirect_url = this.config.base_redirect_url;
            next();
        });
    }

    private setBaseRoutes() {
        this.app.use('/health', (req, res) => {
            res.status(200).send('OK');
        });
    }

    private setRouter() {
        const app_router = new AppRouter();
        this.app.use('/url', app_router.getRouter());
    }

    public listen() {
        this.app.listen(this.config.port, () => {
            console.log(`Server is up on port ${this.config.port}!`);
        });
    }

}