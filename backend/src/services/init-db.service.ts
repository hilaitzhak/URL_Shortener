import { DBService } from "./db.service";

export class initDBService extends DBService {
    constructor() {
        super();
    }

    public async init() {
        await this.createURLShortenerDB();
        await this.createURLTable();
    }

    private async createURLShortenerDB () {
        try {
            await this.query(`CREATE DATABASE IF NOT EXISTS url_shortener
                CHARACTER SET utf8mb4
                COLLATE utf8mb4_general_ci;`);
        } catch (error) {
           console.log('initDBService/createURLShortenerDB - error', error);
           throw error;
        }
    }

    private async createURLTable () {
        try {
            await this.query(`
            CREATE TABLE IF NOT EXISTS urls (
                id int NOT NULL AUTO_INCREMENT,
                original_url TEXT NOT NULL,
                shorten_url VARCHAR(250) NOT NULL,
                PRIMARY KEY (id),
                INDEX idx_original_url (original_url(255)),
                INDEX (shorten_url)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
        `);
        } catch (error) {
           console.log('initDBService/createURLTable - error', error);
           throw error;
        }
    }
}