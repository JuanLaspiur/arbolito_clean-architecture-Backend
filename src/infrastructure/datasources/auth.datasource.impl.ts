import { BcryptAdapter } from "../../config/bcrypt";
import { UserModel } from "../../data/mogodb";
import { AuthDataSource, CustomError, UserEntity } from "../../domain";
import { LoginDto, RegisterDto } from "../../domain/dtos";


type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;


export class AuthDataSourceImpl implements AuthDataSource {

    constructor(private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare)
   {} 

    async login(loginDto: LoginDto): Promise<UserEntity> {
        const { password, email } = loginDto;
        try {
            const user = await UserModel.findOne({email});
            if(!user) throw CustomError.badRequest('User does not exist');
            if(!this.comparePassword(password, user.password)) throw CustomError.unauthorized('Incorrect password');
            
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
            const exists = await UserModel.findOne({email});
            if(exists) throw CustomError.badRequest('User already exists');
            const user = await UserModel.create({
                name,
                password: this.hashPassword(password),
                email
            });
            await user.save();
          // TODO: 
            return new UserEntity(user.id, name, email, user.password, user.role);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }
}