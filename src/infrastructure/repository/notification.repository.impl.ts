import { NotificationDataSource, NotificationEntity, NotificationRepository} from "../../domain";
import { CreateNotificationDto } from "../../domain/dtos/notification/createNotification.dto";


export  class NotificationRepositoryImpl implements NotificationRepository{
   
    constructor(private readonly notificationDataSource: NotificationDataSource){}
   
    createNotification(dto: CreateNotificationDto): Promise<NotificationEntity> {
        return this.notificationDataSource.createNotification(dto)
    }

}