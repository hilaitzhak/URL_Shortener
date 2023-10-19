// import express, {Express, Request, Response} from 'express';
// import { nanoid } from 'nanoid';
// import cors from 'cors';
// import { Database } from './src/db/db';
// import {isUri} from 'valid-url';
// import { Connection, ConnectionOptions, createConnection } from 'mysql2/promise';
// import { DBConnectionProvider } from './src/providers/db.provider';
// import { DBService } from './src/services/db.service';
// import { initDBService } from './src/services/init-db.service';
// import { UrlDBService } from './src/services/url-db.service';
// import { AppConfig } from './src/models/config';
// import { AppServer } from './src/models/server';

import { AppServer } from "./src/models/server";

// const app_config = new AppConfig();

// const validateURL = (url: string): boolean => {
//     return Boolean(isUri(url));
// };


// const initDB = async () => {
//     await DBConnectionProvider.connect(app_config.db);
//     const init_db_service = new initDBService();
//     await init_db_service.init();
// };

// const main = async () => {
//     // const server: Express = express();
//     // const port = app_config.port;
//     await initDB();
 
    // server.use(cors());
    // server.use(express.json());
    // const base_url = `http://localhost:${port}`;
    // server.post('/url/shorten', async (req: Request, res: Response) => {
    //     try {
    //         const url = req.body?.url;

    //         if(!url) {
    //             throw {status: 'ERROR', message: 'url is required', code: 400};
    //         }
    //         const is_valid_url = validateURL(url);
    //         if(!is_valid_url) {
    //             throw {status: 'ERROR', message: 'Valid url is required', code: 406};
    //         }

    //         const url_db_service = new UrlDBService();
    //         const existing_short_url = await url_db_service.getShortURLByOriginalURL(url);

    //         if (existing_short_url) {
    //             const result = {url: existing_short_url};
    //             res.send(result);
    //             return;
    //         }
    //         const short_str = nanoid(5);
    //         const shorten_url = `${base_url}/${short_str}`;
    //         url_db_service.saveURL(url, shorten_url);
    //         const result = {url: shorten_url};
    //         res.send(result);
    //     } catch (error: any) {
    //         res.status(error.code).send({status: error.status, message: error.message});
    //     }
    // });

    // server.get('/:short_str', async (req: Request, res: Response) => {
    //     try {
    //         const short_str = req.params?.short_str;
    //         if(!short_str) {
    //             throw {status: 'ERROR', message: 'url not found', code: 404};
    //         } 
    //         const shorten_url = `${base_url}/${short_str}`;
    //         const url_db_service = new UrlDBService();
    //         const original_url = await url_db_service.getOriginalURLByShortURL(shorten_url);
    //         if(!original_url) {
    //             throw {status: 'ERROR', message: 'url not found', code: 404};
    //         }

    //         res.redirect(original_url);
    //     } catch (error: any) {
    //         res.status(error.code).send({status: error.status, message: error.message});
    //     }
    // });

    // server.listen(port, () => {
    //     console.log(`Server is up on port ${port}!`);
    // });
// };

// main();

const server = new AppServer();

server.listen();