import { Validators } from "../../../config/validators";

export class GetTodaysHomilyDto {
    private constructor(
        public date: string
    ) {}

    static get(object: { [key: string]: any }): [string | null, GetTodaysHomilyDto | null] {
        const { date } = object;
        if (!date) return ['Missing date', null];
        if(!Validators.date.test(date)) return ['Invalid date format', null]

        return [null, new GetTodaysHomilyDto(date)];
    }
}
