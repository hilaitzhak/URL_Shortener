export class Database {
    private db: Map<string, string>;
    private db_original_urls: Map<string, string>;
    constructor() {
        this.db = new Map<string, string>();
        this.db_original_urls = new Map<string, string>();
    }

    saveURL(short_str: string, url: string, shorten_url: string) {
        this.db.set(short_str, url);
        this.db_original_urls.set(url, shorten_url);
    }

    getURL(short_str: string) {
        return this.db.get(short_str);
    }

    getOriginalURL(url: string) {
        return this.db_original_urls.get(url);
    }
}