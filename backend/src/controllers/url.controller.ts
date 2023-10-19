import { isUri } from "valid-url";
import { AppConfig } from "../models/config";
import { UrlDBService } from "../services/url-db.service";
import { nanoid } from "nanoid";
import { URLRequest, URLResponse } from "../models/interfaces/global.interface";


// const base_url = `http://localhost:${port}`;

export class UrlController {
    private url_db_service: UrlDBService;
    constructor() {
        this.url_db_service = new UrlDBService();
    }

    async shortenUrl(req: URLRequest, res: URLResponse) {
        const validateURL = (url: string): boolean => {
            return Boolean(isUri(url));
        };

        try {
            const url = req.body?.url;

            if(!url) {
                throw {status: 'ERROR', message: 'url is required', code: 400};
            }
            const is_valid_url = validateURL(url);
            if(!is_valid_url) {
                throw {status: 'ERROR', message: 'Valid url is required', code: 406};
            }
            
            const existing_short_url = await this.url_db_service.getShortURLByOriginalURL(url);

            if (existing_short_url) {
                const result = {url: existing_short_url};
                res.send(result);
                return;
            }
            const short_str = nanoid(5);
            const shorten_url = `${req.base_redirect_url}/${short_str}`;
            this.url_db_service.saveURL(url, shorten_url);
            const result = {url: shorten_url};
            res.send(result);
        } catch (error: any) {
            res.status(error.code).send({status: error.status, message: error.message});
        }

    }


    async redirectToOriginalUrl(req: URLRequest, res: URLResponse) {
        try {
            const short_str = req.params?.short_str;
            if(!short_str) {
                throw {status: 'ERROR', message: 'url not found', code: 404};
            } 
            const shorten_url = `${req.base_redirect_url}/${short_str}`;
            
            const original_url = await this.url_db_service.getOriginalURLByShortURL(shorten_url);
            if(!original_url) {
                throw {status: 'ERROR', message: 'url not found', code: 404};
            }

            res.redirect(original_url);
        } catch (error: any) {
            res.status(error.code).send({status: error.status, message: error.message});
        }
    }
}

