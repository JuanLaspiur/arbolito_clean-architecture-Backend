import { Request, Response } from "express";
export class HomilyController {
    constructor() { }

    getAllHomily(req: Request, res: Response) {
        res.json('getAllHomilias')
    }
    getTodaysHomily(req: Request, res: Response) {
        res.json('getTodaysHomily');
    }
    getThisWeeksHomily(req: Request, res: Response) {
        res.json('getThisWeeksHomily');
    }

}