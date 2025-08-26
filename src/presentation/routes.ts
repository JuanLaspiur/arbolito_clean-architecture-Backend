import { Router } from "express";
import { HomilyRoutes } from "./Homily/routes";

export class AppRoutes {
   static get routes():Router{
    const router = Router();
    router.use('/api/homily', HomilyRoutes.routes);
    return router;
}

}