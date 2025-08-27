import { AuthDataSource, CustomError, UserEntity } from "../../domain";
import { LoginDto, RegisterDto } from "../../domain/dtos";


export class AuthDataSourceImpl implements AuthDataSource {

    async login(loginDto: LoginDto): Promise<UserEntity> {
        const { password, email } = loginDto;
        try {
            // verificar si existe el usuario
            // encriptar la contraseño
            // mappear la respuesta a la entidad
            return new UserEntity('1', 'name', email, password, "user");
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }
    async register(registerDto: RegisterDto): Promise<UserEntity> {
        try {
            const { name, password, email } = registerDto;
            return new UserEntity('1', name, email, password, "user");
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }
}