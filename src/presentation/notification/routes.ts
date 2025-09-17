import { Router } from "express";
import { NotificationController } from "./controller";
import { NotificationDataSourceImpl, NotificationRepositoryImpl } from "../../infrastructure";


export class NotificationRoutes {
        static get routes(): Router {
            const datasource = new NotificationDataSourceImpl();
            const vacationRepository = new NotificationRepositoryImpl(datasource);
            const controller = new NotificationController(vacationRepository);
            const router = Router();
            router.post('/create', controller.createNotification.bind(controller));
            return router;
        }
}

