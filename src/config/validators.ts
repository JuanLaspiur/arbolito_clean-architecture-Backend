export class Validators {
    static get date() {
        // YYYY-MM-DD
        return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    }
}
