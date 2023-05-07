import { User } from '../Domain/User';
import { CreateUserRequestDTO } from '../Dto/CreateUser/CreateUserRequestDTO';

export interface IUsersRepository {
  create(params: CreateUserRequestDTO): Promise<void>
  findByEmail(email: string): Promise<User>;
}