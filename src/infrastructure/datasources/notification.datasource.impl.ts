import { NotificationModel } from "../../data/mogodb";
import { NotificationDataSource, NotificationEntity } from "../../domain";
import { CreateNotificationDto } from "../../domain/dtos/notification/createNotification.dto";

export class NotificationDataSourceImpl implements NotificationDataSource {

  async createNotification(dto: CreateNotificationDto): Promise<NotificationEntity> {
    const doc = await NotificationModel.create({
      userId: dto.userId,
      title: dto.title,
      message: dto.message,
      type: dto.type,
      isRead: false,
    });

    return new NotificationEntity(
      doc.id,
      doc.userId,
      doc.title,
      doc.isRead,
      doc.message,
      doc.createdAt,
      doc.type
    );
  } 
/*
  async findByUser(userId: string): Promise<NotificationEntity[]> {
    const docs = await NotificationModel.find({ userId }).sort({ createdAt: -1 });
    return docs.map(
      (doc) =>
        new NotificationEntity(
          doc.id,
          doc.userId,
          doc.title,
          doc.isRead,
          doc.message,
          doc.createdAt,
          doc.type
        )
    );
  }

  async markAsRead(id: string): Promise<NotificationEntity | null> {
    const doc = await NotificationModel.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );

    if (!doc) return null;

    return new NotificationEntity(
      doc.id,
      doc.userId,
      doc.title,
      doc.isRead,
      doc.message,
      doc.createdAt,
      doc.type
    );
  }

  async delete(id: string): Promise<boolean> {
    const res = await NotificationModel.findByIdAndDelete(id);
    return !!res;
  } */
}
