import { prisma } from '@infra/prisma/client';
import { CreateTodoUserRequestDto } from '@modules/Todo/Dto/CreateTodoUserDto/CreateTodoUserRequestDto';
import { IUserTodoRepository } from '../../IUserTodoRepository';

export class UserTodoRepositoryPrisma implements IUserTodoRepository {
	async createTodoToUser(params: CreateTodoUserRequestDto): Promise<void> {
		await prisma.userTodo.create({
			data: {
				id_todo: params.id_todo,
				id_user: params.id_user,
			}
		});
	}
}