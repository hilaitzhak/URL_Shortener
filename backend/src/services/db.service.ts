import { DBConnectionProvider } from "../providers/db.provider";

export class DBService {
    
    constructor() {
    } 

    protected async query(query: string, params: any[] = []) {
        try {
            let db_res: any = (await DBConnectionProvider.connection.query(query.trim(), params) || [])[0];
            if (!Array.isArray(db_res)) {
                db_res = [db_res];
            }
            const res = db_res.filter((result: any) => !Object.keys(result).includes('affectedRows'));
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}