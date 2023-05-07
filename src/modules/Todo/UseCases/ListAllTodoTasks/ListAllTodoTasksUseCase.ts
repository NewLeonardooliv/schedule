import { ITodoRepository } from '@modules/Todo/Repositories/ITodoRepository';

export class ListAllTodoTasksUseCase {
	constructor(
		private todoRepository: ITodoRepository,
	) { }

	async execute(id_user: number) {
		return await this.todoRepository.ListAllTodo(id_user);
	}
}