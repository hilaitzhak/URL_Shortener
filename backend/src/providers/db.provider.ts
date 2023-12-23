import { Connection, ConnectionOptions, createConnection } from "mysql2/promise";

export class DBConnectionProvider {
    private static _connection: Connection;
    
    public static get connection(): Connection {
        return DBConnectionProvider._connection;
    }

    private constructor() {}

    public static async connect(config: ConnectionOptions): Promise<void> {
        try {
            DBConnectionProvider._connection = await createConnection(config);
        } catch (error) {
            console.log(error)
        }
    }
}