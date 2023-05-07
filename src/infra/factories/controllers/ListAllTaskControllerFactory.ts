import { TodoRepositoryPrisma } from '@modules/Todo/Repositories/Implementations/prisma/TodoRepositoryPrisma';
import { ListAllTodoTasksController } from '@modules/Todo/UseCases/ListAllTodoTasks/ListAllTodoTasksController';
import { ListAllTodoTasksUseCase } from '@modules/Todo/UseCases/ListAllTodoTasks/ListAllTodoTasksUseCase';

const todoRepository = new TodoRepositoryPrisma();
const listAllTaskUseCase = new ListAllTodoTasksUseCase(todoRepository);
const listAllkController = new ListAllTodoTasksController(listAllTaskUseCase);

export { listAllkController };