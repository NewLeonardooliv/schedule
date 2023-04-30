import { Entity } from '@core/domains/Entity';
import { Password } from './Password';

export type UserProps = {
  id?: number;
  email: string;
  password: Password;
}


export class User extends Entity<UserProps> {
	private constructor(props: UserProps) {
		super(props);
	}

	create(props: UserProps) {
		const user = new User({ ...props });

		return user;
	}

	get email() {
		return this.email;
	}
  
	get password() {
		return this.password;
	}
}