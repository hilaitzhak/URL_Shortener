import { Connection, ConnectionOptions, createConnection } from "mysql2/promise";
import { AppConfig } from "../models/config";

export class DBConnectionProvider {
    private static _connection: Connection;
    
    public static get connection(): Connection {
        return DBConnectionProvider._connection;
    }

    private constructor() {}

    public static async connect(): Promise<void> {
        const app_config = new AppConfig();
        DBConnectionProvider._connection = await createConnection(app_config.db);
    }
}