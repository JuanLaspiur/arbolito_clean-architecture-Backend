import { Validators } from "../../../config/validators";

export class GetDateHomilyDto {
    private constructor(
        public date: string
    ) {}

    static create(object: { [key: string]: any }): [string | null, GetDateHomilyDto | null] {
        const { date } = object;
        if (!date) return ['Missing date', null];
        if(!Validators.date.test(date)) return ['Invalid date format', null]

        return [null, new GetDateHomilyDto(date)];
    }
}
