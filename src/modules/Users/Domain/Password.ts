import bcrypt from 'bcrypt';

export class Password {
	private readonly password: string;
	private readonly hashed?: boolean;

	private constructor(password: string) {
		this.password = password;
	}

	public async comparePassword(plainTextPassword: string): Promise<boolean> {
		let hashed: string;

		if (this.hashed) {
			hashed = this.password;

			return await bcrypt.compare(plainTextPassword, hashed);
		}

		return this.password === plainTextPassword;
	}

	static create(password: string) {
		return new Password(password);
	}
}
