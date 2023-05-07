import { Entity } from '@core/domains/Entity';
import { Password } from './Password';

export type UserProps = {
	email: string;
	password: Password;
}


export class User extends Entity<UserProps> {
	private constructor(props: UserProps, id?: number) {
		super(props, id);
	}

	static create(props: UserProps, id?: number) {
		const user = new User(props, id);

		return user;
	}

	get email() {
		return this.props.email;
	}

	get password() {
		return this.props.password;
	}
}