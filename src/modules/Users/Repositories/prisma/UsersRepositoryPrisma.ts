import { CreateUserRequestDTO } from '@modules/Users/Dto/CreateUser/CreateUserRequestDTO';
import { IUsersRepository } from '../IUsersRepository';
import { prisma } from '@infra/prisma/client';
import { FindByEmailReponseDTO } from '@modules/Users/Dto/FindByEmail/FindByEmailReponseDTO';

export class UsersRepositoryPrisma implements IUsersRepository {
	async create(params: CreateUserRequestDTO) {
		await prisma.user.create({
			data: {
				email: params.email,
				password: params.password,
				is_active: true
			}
		});
	}

	async findByEmail(email: string): Promise<FindByEmailReponseDTO> {
		return await prisma.user.findFirst({
			where: {
				email: email
			}
		});
	}

}