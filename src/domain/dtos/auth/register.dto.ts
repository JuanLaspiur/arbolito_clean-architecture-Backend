import { Validators } from "../../../config";

export class RegisterDto {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static create(object: { [key: string]: any }): [string | null, RegisterDto | null] {
    const { name, email, password } = object;

    if (!name || typeof name !== 'string') {
      return ['Missing or invalid name', null];
    }

    if (!email || typeof email !== 'string' || !Validators.email.test(email.trim())) {
      return ['Missing or invalid email', null];
    }

    if (!password || typeof password !== 'string' || !Validators.password.test(password)) {
      return ['Missing or invalid password (min 6 chars, at least 1 letter and 1 number)', null];
    }

    return [null, new RegisterDto(name.trim(), email.trim(), password)];
  }
}
