import { Request, Response } from "express";
import { CreateNotificationDto } from "../../domain/dtos";
import { NotificationRepository, CustomError } from "../../domain";

export class NotificationController {
    constructor(private readonly notificationRepository: NotificationRepository) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }

    createNotification(req: Request, res: Response) {
        const [error, createNotificationDto] = CreateNotificationDto.create(req.body);

        if(error) return res.status(400).json({ error });
        
        this.notificationRepository.createNotification(createNotificationDto!).
        then(notification => res.status(200).json(notification))
        .catch(error => this.handleError(error, res));

    }
}