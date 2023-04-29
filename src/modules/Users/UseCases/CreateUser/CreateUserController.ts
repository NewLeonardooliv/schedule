

import { CreateUserRequestDTO } from '@modules/Users/Dto/CreateUser/CreateUserRequestDTO';
import { CreateUserUseCase } from './CreateUserUseCase';
import { Controller } from '@core/infra/Controller';
import { created, fail } from '@core/infra/HttpResponse';

class CreateUserController implements Controller {
	constructor(private createUserUseCase: CreateUserUseCase) { }
	async handle({ email, password }: CreateUserRequestDTO) {
		try {
			await this.createUserUseCase.execute({
				email,
				password,
			});
			return created();

		} catch (error) {
			return fail(error);
		}

	}
}

export { CreateUserController };
