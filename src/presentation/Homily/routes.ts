import { Router } from "express";
import { HomilyController } from "./controller";

export class HomilyRoutes {
   static get routes():Router{
    const controller = new HomilyController();
    const router = Router();
    router.get('/getAll',controller.getAllHomily);
    router.get('/getThisWeeks',controller.getThisWeeksHomily);
    router.get('/getToday',controller.getTodaysHomily);
    return router;
}

}