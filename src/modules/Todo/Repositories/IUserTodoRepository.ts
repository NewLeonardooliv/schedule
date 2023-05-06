import { CreateTodoUserRequestDto } from '../Dto/CreateTodoUserDto/CreateTodoUserRequestDto';

export interface IUserTodoRepository {
  createTodoToUser(params: CreateTodoUserRequestDto): Promise<void>;
}