import { JWT } from '@modules/Users/Domain/Jwt';
import { AuthenticateUserRequestDto } from '@modules/Users/Dto/AuthenticateUser/AuthenticateUserRequestDto';
import { IUsersRepository } from '@modules/Users/Repositories/IUsersRepository';
import { AppError } from 'src/shared/errors/AppError';

export class AuthenticateUserUseCase {
	constructor(private userRepository: IUsersRepository) { }

	async execute({ email, password }: AuthenticateUserRequestDto) {
		const user = await this.userRepository.findByEmail(email);

		if (!user) {
			throw new AppError('Invalid e-mail/password combination.');
		}

		const passwordMatch = await user.password.comparePassword(password);
		if (!passwordMatch) {
			throw new AppError('Invalid e-mail/password combination.');
		}
		const { token } = await JWT.signUser(user);

		return token;
	}
}