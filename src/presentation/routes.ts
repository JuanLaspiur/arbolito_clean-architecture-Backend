import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { VacationRoutes } from "./vacation/routes"
import { NotificationRoutes } from "./notification/routes";

export class AppRoutes {
   static get routes():Router{
    const router = Router();   
    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/vacations', VacationRoutes.routes);
    router.use('/api/notifications', NotificationRoutes.routes);
    return router;
}

}