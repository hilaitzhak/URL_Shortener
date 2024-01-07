import { Pool, PoolOptions, createPool } from "mysql2/promise";

export class DBConnectionProvider {
    private static _pool: Pool;
    
    public static get pool(): Pool {
        return DBConnectionProvider._pool;
    }

    private constructor() {}

    public static createPool(config: PoolOptions): void {
        try {
            DBConnectionProvider._pool = createPool(config);
        } catch (error) {
            console.log(error)
        }
    }
}