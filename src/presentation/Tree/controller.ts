import { Request, Response } from "express";
import { CreateTreeDto } from "../../domain";
export class TreeController {
    constructor() { }

    createTree(req: Request, res: Response) {
     const [error, createTreeDto] =  CreateTreeDto.create(req.body);
        if(error){
            return res.status(400).json({error});
        }
      return res.status(200).json(createTreeDto);
    }
    getAllTrees(req: Request, res: Response) {
        res.json('getAll')
    }
  


}