import { CreateUserRequestDTO } from '@modules/Users/Dto/CreateUser/CreateUserRequestDTO';
import { IUsersRepository } from '@modules/Users/Repositories/IUsersRepository';
import { hash } from 'bcrypt';
import { AppError } from 'src/shared/errors/AppError';

class CreateUserUseCase {
	constructor(
    private usersRepository: IUsersRepository
	) { }

	async execute({
		email,
		password,
	}: CreateUserRequestDTO): Promise<void> {
		const userAlreadyExists = await this.usersRepository.findByEmail(email);

		if (userAlreadyExists) {
			throw new AppError('User already exists');
		}

		const passwordHash = await hash(password, 8);

		await this.usersRepository.create({
			email,
			password: passwordHash,
		});
	}
}

export { CreateUserUseCase };
