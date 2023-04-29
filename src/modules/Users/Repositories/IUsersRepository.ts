import { CreateUserRequestDTO } from '../Dto/CreateUser/CreateUserRequestDTO';
import { FindByEmailReponseDTO } from '../Dto/FindByEmail/FindByEmailReponseDTO';

export interface IUsersRepository {
  create(params: CreateUserRequestDTO)
  findByEmail(email: string): Promise<FindByEmailReponseDTO>;
}