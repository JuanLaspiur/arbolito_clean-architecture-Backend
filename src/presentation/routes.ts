import { Router } from "express";
import { TreeRoutes } from "./Tree/routes";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
   static get routes():Router{
    const router = Router();   
    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/trees', TreeRoutes.routes);

    return router;
}

}