import { DBService } from "./db.service";

export class UrlDBService extends DBService {
    constructor() {
        super();
    }

    public async getShortURLByOriginalURL(url: string) {
        try {
            const params = [url];
            const query = `
                SET @original_url = ?;

                SELECT * FROM urls WHERE original_url = @original_url;
            `;
            const res = await this.query(query, params);
            const short_url = res?.[0]?.[0]?.shorten_url;
            return short_url;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async saveURL(url: string, shorten_url: string) {
        try {
            const params = [url, shorten_url];
            const query = `
                SET @original_url = ?;
                SET @shorten_url = ?;

                INSERT INTO urls (original_url, shorten_url)
                VALUES (@original_url, @shorten_url);
            `;
            await this.query(query, params);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async getOriginalURLByShortURL(shorten_url: string) {
        try {
            const params = [shorten_url];
            const query = `
                SET @shorten_url = ?;

                SELECT * FROM urls WHERE shorten_url = @shorten_url;
            `;
            const res = await this.query(query, params);
            const original_url = res?.[0]?.[0]?.original_url;
            return original_url;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}