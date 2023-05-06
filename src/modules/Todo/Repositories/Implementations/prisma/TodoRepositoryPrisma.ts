import { CreateTodoRequestDto } from '@modules/Todo/Dto/CreateTodoDto/CreateTodoRequestDto';
import { UpdateTodoRequestDto } from '@modules/Todo/Dto/UpdateTodoDto/UpdateTodoRequestDto';
import { GetTodoByIdReponseDto } from '@modules/Todo/Dto/getTodoById/GetTodoByIdReponseDto';
import { ITodoRepository } from '../../ITodoRepository';
import { prisma } from '@infra/prisma/client';
import { CreateTodoResponseDto } from '@modules/Todo/Dto/CreateTodoDto/CreateTodoResponseDto';

export class TodoRepositoryPrisma implements ITodoRepository {
	async createTodo(params: CreateTodoRequestDto): Promise<CreateTodoResponseDto> {
		return await prisma.todo.create({
			data: {
				ds_list: params.ds_list,
				priority: params.priority,
			}
		});
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
}