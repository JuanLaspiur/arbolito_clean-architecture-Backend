import { Router } from "express";
import { HomilyController } from "./controller";

export class HomilyRoutes {
   static get routes():Router{
    const controller = new HomilyController();
    const router = Router();
    router.use('/getAll',controller.getAllHomily);
    router.use('/getThisWeeks',controller.getThisWeeksHomily);
    router.use('/getToday',controller.getTodaysHomily);
    return router;
}

}