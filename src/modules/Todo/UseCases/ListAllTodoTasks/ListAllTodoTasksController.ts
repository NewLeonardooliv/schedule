import { Controller } from '@core/infra/Controller';
import { ListAllTodoTasksUseCase } from './ListAllTodoTasksUseCase';
import { fail, ok } from '@core/infra/HttpResponse';

export class ListAllTodoTasksController implements Controller {
	constructor(private listAllTodoTaskUseCase: ListAllTodoTasksUseCase) { }

	async handle({ userId }: any) {
		try {
			const result = await this.listAllTodoTaskUseCase.execute(userId);

			const tasks = result.map(task => {
				return {
					id: task.id,
					ds_list: task.props.ds_list,
					priority: task.props.priority
				};
			});

			return ok(tasks);
		} catch (error) {
			return fail(error);
		}
	}
}
