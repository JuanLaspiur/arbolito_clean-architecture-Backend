import { Router } from "express";
import { TreeController } from "./controller";

export class TreeRoutes {
   static get routes():Router{
    const controller = new TreeController();
    const router = Router();
    router.post('/create', controller.createTree);
    router.get('/getAll', controller.getAllTrees);

    return router;
}

}