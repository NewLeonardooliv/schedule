import { CreateTodoRequestDto } from '@modules/Todo/Dto/CreateTodoDto/CreateTodoRequestDto';
import { ITodoRepository } from '@modules/Todo/Repositories/ITodoRepository';
import { IUserTodoRepository } from '@modules/Todo/Repositories/IUserTodoRepository';

export class CreateTaskUseCase {
	constructor(
		private todoRepository: ITodoRepository,
		private userTodoRepository: IUserTodoRepository
	) { }

	async execute(request: CreateTodoRequestDto) {
		const task = await this.todoRepository.createTodo(request);

		await this.userTodoRepository.createTodoToUser({
			id_user: request.userId,
			id_todo: task.id
		});


		return task;
	}
}