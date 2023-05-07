import { Todo } from '../Domain/Todo';
import { CreateTodoRequestDto } from '../Dto/CreateTodoDto/CreateTodoRequestDto';
import { UpdateTodoRequestDto } from '../Dto/UpdateTodoDto/UpdateTodoRequestDto';
import { GetTodoByIdReponseDto } from '../Dto/getTodoById/GetTodoByIdReponseDto';

export interface ITodoRepository {
  createTodo(params: CreateTodoRequestDto): Promise<Todo>;
  updateTodo(params: UpdateTodoRequestDto): Promise<void>;
  getTodoById(id: number): Promise<GetTodoByIdReponseDto>;
  ListAllTodo(id_user: number): Promise<Todo[]>
}