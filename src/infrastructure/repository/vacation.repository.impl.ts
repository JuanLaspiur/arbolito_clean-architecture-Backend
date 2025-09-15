// infrastructure/repositories/vacation.repository.ts
import { VacationDataSource, VacationRepository, VacationEntity } from "../../domain";
import { CreateVacationDto } from "../../domain/dtos";

export class VacationRepositoryImpl implements VacationRepository {

  constructor(private readonly vacationDataSource: VacationDataSource) {}

  async createVacation(dto: CreateVacationDto): Promise<VacationEntity> {
    return this.vacationDataSource.createVacation(dto);
  }

}
