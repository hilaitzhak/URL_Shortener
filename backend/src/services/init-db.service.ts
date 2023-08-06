import { DBService } from "./db.service";

export class initDBService extends DBService {
    constructor() {
        super();
    }

    public async init() {
        await this.createURLTable();
    }

    private async createURLTable () {
        await this.query(`
            CREATE TABLE IF NOT EXISTS urls (
                id int NOT NULL AUTO_INCREMENT,
                original_url VARCHAR(500) NOT NULL,
                shorten_url VARCHAR(50) NOT NULL,
                PRIMARY KEY (id),
                INDEX (original_url),
                INDEX (shorten_url)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
        `);
    }
}