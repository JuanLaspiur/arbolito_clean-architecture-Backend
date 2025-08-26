import { Request, Response } from "express";
import { GetDateHomilyDto } from "../../domain/dtos/homily/getDate-homily.dto";
export class HomilyController {
    constructor() { }

    getAllHomily(req: Request, res: Response) {
        res.json('getAll')
    }
    getTodaysHomily(req: Request, res: Response) {
        const [error, getDateHomilyDto] = GetDateHomilyDto.create(req.body);
        if(error) return res.status(400).json({error});
        
        
        res.json(getDateHomilyDto);
    }
    getThisWeeksHomily(req: Request, res: Response) {
        res.json('getThisWeeks');
    }

}