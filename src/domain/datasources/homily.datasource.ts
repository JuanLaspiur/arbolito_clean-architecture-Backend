import { GetDateHomilyDto } from "../dtos/homily/getDate-homily.dto";
import { HomilyEntity } from "../entities/homily.entity";

export abstract class HomilyDataSource {
    abstract getAll():Promise<HomilyEntity[]>;
    abstract getToday(getDateHomilyDto:GetDateHomilyDto):Promise<HomilyEntity>;
    abstract getThisWeeks(getDateHomilyDto:GetDateHomilyDto):Promise<HomilyEntity[]>;
}