import { Pool, PoolOptions, createPool } from "mysql2/promise";

export class DBConnectionProvider {
    private static _pool: Pool;
    
    public static get pool(): Pool {
        return DBConnectionProvider._pool;
    }

    private constructor() {}

    public static createPool(config: PoolOptions): void {
        try {
            DBConnectionProvider._pool = createPool({
                ...config,
                database: 'url_shortener',
                keepAliveInitialDelay: 0,
                enableKeepAlive: true,
                charset: 'utf8mb4',
                waitForConnections: true,
                multipleStatements: true
            });
        } catch (error) {
            console.log(error)
        }
    }
}