import { CreateUserRequestDTO } from '@modules/Users/Dto/CreateUser/CreateUserRequestDTO';
import { IUsersRepository } from '../IUsersRepository';
import { prisma } from '@infra/prisma/client';
import { User } from '@modules/Users/Domain/User';
import { UserMapper } from '@modules/Users/Mappers/UserMapper';

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

	async findByEmail(email: string): Promise<User> {
		const user = await prisma.user.findFirst({
			where: {
				email: email
			}
		});

		return UserMapper.toDomain(user);
	}

}