// domain/entities/user.entity.ts

export class UserEntity {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public password: string,       // en la entidad real sería hash
    public role: 'admin' | 'user' = 'user',
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}
}
