import { Controller } from '@core/infra/Controller';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import { created, fail } from '@core/infra/HttpResponse';
import { CreateTodoRequestDto } from '@modules/Todo/Dto/CreateTodoDto/CreateTodoRequestDto';

export class CreateTaskController implements Controller {
	constructor(private createTaskUseCase: CreateTaskUseCase) { }

	async handle({ds_list, priority, userId}: CreateTodoRequestDto) {
		try {
			await this.createTaskUseCase.execute({ds_list, priority, userId});
			return created();
		} catch (error) {
			return fail(error);
		}
	}
}