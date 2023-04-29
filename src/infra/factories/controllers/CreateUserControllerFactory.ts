import { UsersRepositoryPrisma } from '@modules/Users/Repositories/prisma/UsersRepositoryPrisma';
import { CreateUserController } from '@modules/Users/UseCases/CreateUser/CreateUserController';
import { CreateUserUseCase } from '@modules/Users/UseCases/CreateUser/CreateUserUseCase';

const usersRepository = new UsersRepositoryPrisma();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };