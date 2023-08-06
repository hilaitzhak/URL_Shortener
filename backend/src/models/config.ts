import { ConnectionOptions } from 'mysql2/promise';
import path from 'path';


export class AppConfig {
    public readonly db: ConnectionOptions;
    
    constructor() {
        const config_path = path.join(process.env.PWD,'config.json');
        const config = require(config_path);
        this.db = config?.db || {};
    }
}