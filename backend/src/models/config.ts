import { ConnectionOptions } from 'mysql2/promise';
import path from 'path';

export class AppConfig {
    public readonly db: ConnectionOptions;
    public readonly port: number;
    public readonly base_redirect_url: string;
    constructor() {
        try {
            const config_path = path.join(process.env.PWD, 'config.json');
            const config = require(config_path);
            this.db = config?.db || {};
            this.port = config?.port || 3001;
            this.base_redirect_url = config?.base_redirect_url;
        } catch (error) {
            throw new Error("ERROR: config.json doesn't exists");
        }
    }
}