import { ConnectionOptions } from 'mysql2/promise';
import path from 'path';
import fs from 'fs';

export class AppConfig {
    public readonly db: ConnectionOptions;
    public readonly port: number;
    public readonly base_redirect_url: string;
    constructor() {
        try {
            const config = this.loadConfig()
            this.db = config?.db || {};
            this.port = config?.port || 3001;
            this.base_redirect_url = config?.base_redirect_url || '';
        } catch (error) {
            console.log('AppConfig/constructor - error', error)
            throw new Error("ERROR: config.json doesn't exists");
        }   
    }

    private loadConfig(): any {
        const config = {
            port: process.env.PORT,
            base_redirect_url: process.env.BASE_REDIRECT_URL,
            db: {
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                port: parseInt(process.env.MYSQL_PORT),
                password: process.env.MYSQL_PASSWORD,
                connectionLimit: parseInt(process.env.MYSQL_CONNECTION_LIMIT)
            }
        }
        return config;
    }
}