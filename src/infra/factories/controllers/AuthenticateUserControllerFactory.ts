import { UsersRepositoryPrisma } from '@modules/Users/Repositories/prisma/UsersRepositoryPrisma';
import { AuthenticateUserController } from '@modules/Users/UseCases/AuthenticateUser/AuthenticateUserController';
import { AuthenticateUserUseCase } from '@modules/Users/UseCases/AuthenticateUser/AuthenticateUserUseCase';

const userRepository = new UsersRepositoryPrisma();
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserController };