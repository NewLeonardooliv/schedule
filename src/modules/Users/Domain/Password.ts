import bcrypt from 'bcrypt';

export class Password {
	private readonly password: string;
	private readonly hashed?: boolean;

	private constructor(password: string) {
		this.password = password;
	}

	static create(password: string) {
		return new Password(password);
	}

	public async comparePassword(plainTextPassword: string): Promise<boolean> {

		return await bcrypt.compare(plainTextPassword, this.password);
	}
}
