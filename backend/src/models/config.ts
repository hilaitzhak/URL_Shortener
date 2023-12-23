import { ConnectionOptions } from 'mysql2/promise';
import path from 'path';
import fs from 'fs';

export class AppConfig {
    public readonly db: ConnectionOptions;
    public readonly port: number;
    public readonly base_redirect_url: string;
    constructor() {
        try {
            const config = this.loadConfigFromFile()
            this.db = config?.db || {};
            this.port = config?.port || 3001;
            this.base_redirect_url = config?.base_redirect_url || '';
        } catch (error) {
            throw new Error("ERROR: config.json doesn't exists");
        }
    }

    private loadConfigFromFile(): any {
        let config_file_name = 'config_dev.json';
        if (process.env.NODE_ENV === 'production') {
            config_file_name = 'config.json';
        }
        const config_path = path.join(process.env.PWD, config_file_name);
        const config = require(config_path);
        return config;
    }
}