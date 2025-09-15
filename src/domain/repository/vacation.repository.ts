import { CreateVacationDto } from '../dtos/vacation/createVacation.dto';
import { UpdateVacationDto } from '../dtos/vacation/updateVacation.dto';
import { VacationEntity } from '../entities/vacation.entity';

export abstract class VacationRepository {
    abstract createVacation(createDto:CreateVacationDto):Promise<VacationEntity>
    abstract updateVacation(updateDto:UpdateVacationDto):Promise<VacationEntity | null>

}