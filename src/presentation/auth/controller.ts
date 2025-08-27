import { Request, Response } from "express";
import { RegisterDto, LoginDto } from "../../domain/dtos";

export class AuthController {
    constructor() { }

    register(req: Request, res: Response) {
        const [error, registerDto] = RegisterDto.create(req.body);
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(registerDto);
    }

    login(req: Request, res: Response) {
              const [error, loginDto] = LoginDto.create(req.body);
        if (error) {
            return res.status(400).json({ error });
        }
        return res.status(200).json(loginDto);
    }

}