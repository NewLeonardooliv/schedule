import { CreateTodoRequestDto } from '../Dto/CreateTodoDto/CreateTodoRequestDto';
import { CreateTodoResponseDto } from '../Dto/CreateTodoDto/CreateTodoResponseDto';
import { UpdateTodoRequestDto } from '../Dto/UpdateTodoDto/UpdateTodoRequestDto';
import { GetTodoByIdReponseDto } from '../Dto/getTodoById/GetTodoByIdReponseDto';

export interface ITodoRepository {
  createTodo(params: CreateTodoRequestDto): Promise<CreateTodoResponseDto>;
  updateTodo(params: UpdateTodoRequestDto): Promise<void>;
  getTodoById(id: number): Promise<GetTodoByIdReponseDto>;
}