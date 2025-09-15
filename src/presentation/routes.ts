import { Router } from "express";
import { TreeRoutes } from "./tree/routes";
import { AuthRoutes } from "./auth/routes";
import { VacationRoutes } from "./vacation/routes"


export class AppRoutes {
   static get routes():Router{
    const router = Router();   
    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/trees', TreeRoutes.routes);
    router.use('/api/vacations', VacationRoutes.routes);
    return router;
}

}