import { UpdateVacationDto } from '../dtos';
import { CreateVacationDto } from '../dtos/vacation/createVacation.dto';
import { VacationEntity } from '../entities/vacation.entity';

export abstract class VacationDataSource {
    abstract createVacation(createDto:CreateVacationDto):Promise<VacationEntity>
    abstract updateVacation(updateDto:UpdateVacationDto):Promise<VacationEntity|null>
}