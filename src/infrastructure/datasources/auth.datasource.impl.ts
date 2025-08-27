import { BcryptAdapter } from "../../config/bcrypt";
import { UserModel } from "../../data/mogodb";
import { AuthDataSource, CustomError, UserEntity } from "../../domain";
import { LoginDto, RegisterDto } from "../../domain/dtos";


export class AuthDataSourceImpl implements AuthDataSource {

    async login(loginDto: LoginDto): Promise<UserEntity> {
        const { password, email } = loginDto;
        try {
            const user = await UserModel.findOne({email});
            if(!user) throw CustomError.badRequest('User does not exist');
            if(!BcryptAdapter.compare(password, user.password)) throw CustomError.unauthorized('Incorrect password');
            
            return new UserEntity(user._id.toString(), user.name, email, user.password, user.role);

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
                   // verificar si existe el usuario
            const exists = await UserModel.findOne({email});
            if(exists) throw CustomError.badRequest('User already exists');
            // encriptar la contraseño

            // mappear la respuesta a la entidad
            const user = await UserModel.create({
                name,
                password: BcryptAdapter.hash(password),
                email
            });
            await user.save();
          // TODO: 
            return new UserEntity(user.id, name, email, password, user.role);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }
}