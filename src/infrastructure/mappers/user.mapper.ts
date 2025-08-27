import { CustomError, UserEntity } from "../../domain";

export class UserMapper {
  static userEntityFromObject(object: { [key: string]: any }): UserEntity {
    const { id, _id, name, email, password, role } = object;

    const userId = _id?.toString() || id?.toString();
    if (!userId) {
      throw CustomError.badRequest("Missing id");
    }

    if (!name || typeof name !== "string") {
      throw CustomError.badRequest("Missing or invalid name");
    }

    if (!email || typeof email !== "string") {
      throw CustomError.badRequest("Missing or invalid email");
    }

    if (!password || typeof password !== "string") {
      throw CustomError.badRequest("Missing or invalid password");
    }

    return new UserEntity(userId, name, email, password, role);
  }
}
