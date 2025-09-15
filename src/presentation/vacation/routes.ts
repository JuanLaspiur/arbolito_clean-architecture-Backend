import { Router } from "express";
import { VacationController } from "./controller";
import { VacationDataSourceImp, VacationRepositoryImpl } from "../../infrastructure/";

export class VacationRoutes {
    static get routes(): Router {
        const datasource = new VacationDataSourceImp();
        const vacationRepository = new VacationRepositoryImpl(datasource);

        const controller = new VacationController(vacationRepository);

        const router = Router();
        router.post('/createVacation', controller.createVacation.bind(controller));

        return router;
    }
}
