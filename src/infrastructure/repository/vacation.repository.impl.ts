import { VacationDataSource, VacationRepository, VacationEntity } from "../../domain";
import { CreateVacationDto, UpdateVacationDto } from "../../domain/dtos";

export class VacationRepositoryImpl implements VacationRepository {

  constructor(private readonly vacationDataSource: VacationDataSource) {}

  async createVacation(dto: CreateVacationDto): Promise<VacationEntity> {
    return this.vacationDataSource.createVacation(dto);
  }

  async updateVacation(dto: UpdateVacationDto): Promise<VacationEntity|null> {
    return this.vacationDataSource.updateVacation(dto);
  }

}
