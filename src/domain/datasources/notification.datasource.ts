import { CreateNotificationDto } from '../dtos/notification/createNotification.dto';
import { NotificationEntity } from '../entities/notification.entity';

export abstract class NotificationDataSource {
    abstract createNotification(createDto:CreateNotificationDto):Promise<NotificationEntity>

}