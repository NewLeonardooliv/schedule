import { TodoRepositoryPrisma } from '@modules/Todo/Repositories/Implementations/prisma/TodoRepositoryPrisma';
import { UserTodoRepositoryPrisma } from '@modules/Todo/Repositories/Implementations/prisma/UserTodoRepositoryPrisma';
import { CreateTaskController } from '@modules/Todo/UseCases/CreateTask/CreateTaskController';
import { CreateTaskUseCase } from '@modules/Todo/UseCases/CreateTask/CreateTaskUseCase';

const todoRepository = new TodoRepositoryPrisma();
const userTodoRepository = new UserTodoRepositoryPrisma();
const createTaskUseCase = new CreateTaskUseCase(todoRepository, userTodoRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };