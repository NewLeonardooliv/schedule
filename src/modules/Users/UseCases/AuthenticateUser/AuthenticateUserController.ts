import { Controller } from '@core/infra/Controller';
import { fail, ok } from '@core/infra/HttpResponse';
import { AuthenticateUserRequestDto } from '@modules/Users/Dto/AuthenticateUser/AuthenticateUserRequestDto';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController implements Controller {
	constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }

	async handle({ email, password }: AuthenticateUserRequestDto) {
		try {
			const token = await this.authenticateUserUseCase.execute({ email, password });
			return ok(token);
		} catch (error) {
			return fail(error);
		}
	}
}