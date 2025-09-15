// infrastructure/datasources/vacation.datasource.ts
import { VacationEntity } from "../../domain/entities/vacation.entity";
import { VacationModel } from "../../data/mogodb";
import { CreateVacationDto, UpdateVacationDto } from "../../domain/dtos";
import { VacationMapper } from "../mappers/vacation.mapper";
import { CustomError } from "../../domain/errors/custom.error";

export class VacationDataSourceImp implements VacationDataSourceImp {

  async createVacation(dto: CreateVacationDto): Promise<VacationEntity> {
    try {
      const vacationDoc = await VacationModel.create({
        userId: dto.userId,
        totalDays: dto.totalDays,
        usedDays: dto.usedDays,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        status: dto.status || 'pendiente',
      });

      await vacationDoc.save();

      return VacationMapper.toEntity(vacationDoc);
    } catch (error) {
      throw CustomError.internalServer();
    }
  }

  async getVacationsByUser(userId: number): Promise<VacationEntity[]> {
    try {
      const vacations = await VacationModel.find({ userId }).sort({ startDate: 1 });
      return VacationMapper.toEntities(vacations);
    } catch (error) {
      throw CustomError.internalServer();
    }
  }

  async getVacationById(id: string): Promise<VacationEntity | null> {
    try {
      const vacation = await VacationModel.findById(id);
      if (!vacation) return null;
      return VacationMapper.toEntity(vacation);
    } catch (error) {
      throw CustomError.internalServer();
    }
  }

async updateVacation(updateDto: UpdateVacationDto): Promise<VacationEntity | null> {
  try {
    const { id, ...updateFields } = updateDto;

    const vacation = await VacationModel.findByIdAndUpdate(
      id,
      {
        ...updateFields,
        startDate: updateFields.startDate ? new Date(updateFields.startDate) : undefined,
        endDate: updateFields.endDate ? new Date(updateFields.endDate) : undefined
      },
      { new: true }
    );

    if (!vacation) return null;
    return VacationMapper.toEntity(vacation);
  } catch (error) {
    throw CustomError.internalServer();
  }
}


  async deleteVacation(id: string): Promise<boolean> {
    try {
      const result = await VacationModel.findByIdAndDelete(id);
      return result ? true : false;
    } catch (error) {
      throw CustomError.internalServer();
    }
  }
}
