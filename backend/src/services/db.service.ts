import { DBConnectionProvider } from "../providers/db.provider";

export class DBService {
    
    constructor() {
    } 

    protected async query(query: string, params: any[] = []) {
        try {
            let db_res: any = await DBConnectionProvider.pool.query(query.trim(), params) || [];
            let db_res2 = db_res[0];
            if (!Array.isArray(db_res2)) {
                db_res2 = [db_res2];
            }
            const res = db_res2.filter((result: any) => !Object.keys(result).includes('affectedRows'));
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}