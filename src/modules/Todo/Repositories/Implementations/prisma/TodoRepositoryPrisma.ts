import { CreateTodoRequestDto } from '@modules/Todo/Dto/CreateTodoDto/CreateTodoRequestDto';
import { UpdateTodoRequestDto } from '@modules/Todo/Dto/UpdateTodoDto/UpdateTodoRequestDto';
import { GetTodoByIdReponseDto } from '@modules/Todo/Dto/getTodoById/GetTodoByIdReponseDto';
import { ITodoRepository } from '../../ITodoRepository';
import { prisma } from '@infra/prisma/client';
import { Todo } from '@modules/Todo/Domain/Todo';
import { TodoMapper } from '@modules/Todo/Mapper/TodoMapper';

export class TodoRepositoryPrisma implements ITodoRepository {
	async createTodo(params: CreateTodoRequestDto): Promise<Todo> {
		const task = await prisma.todo.create({
			data: {
				ds_list: params.ds_list,
				priority: params.priority,
			}
		});

		return TodoMapper.toDomain(task);
	}

	async updateTodo(params: UpdateTodoRequestDto): Promise<void> {
		await prisma.todo.update({
			where: {
				id: params.id
			},
			data: {
				ds_list: params.ds_list,
				priority: params.priority,
			}
		});
	}

	async getTodoById(id: number): Promise<GetTodoByIdReponseDto> {
		return await prisma.todo.findFirst({
			where: {
				id: id
			}
		});
	}

	async ListAllTodo(id_user: number): Promise<Todo[]> {
		const todoList = await prisma.todo.findMany({
			where: {
				UserTodo: {
					some: {
						id_user: Number(id_user)
					}
				}
			},
		});

		return todoList.map(todo => TodoMapper.toDomain(todo));
	}
}