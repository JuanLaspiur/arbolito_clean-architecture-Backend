import { Request, Response } from "express";
export class HomilyController {
    constructor() { }

    getAllHomily(req: Request, res: Response) {
        res.json('getAll')
    }
    getTodaysHomily(req: Request, res: Response) {
        res.json('getTodays');
    }
    getThisWeeksHomily(req: Request, res: Response) {
        res.json('getThisWeeks');
    }

}