import { sign, verify } from 'jsonwebtoken';

import { AppError } from 'src/shared/errors/AppError';
import { auth } from '@config/auth';

interface JWTData {
  userId: string
  token: string
}

export interface JWTTokenPayload {
  exp: number
  sub: string
}

export class JWT {
	public readonly userId: string;
	public readonly token: string;

	private constructor({ userId, token }: JWTData) {
		this.userId = userId;
		this.token = token;
	}

	static decodeToken(token: string) {
		try {
			const decoded = verify(token, auth.secretKey) as JWTTokenPayload;

			return decoded;
		} catch (err) {
			throw new AppError('The JWT token is invalid.');

		}
	}

	static createFromJWT(token: string) {
		const jwtPayload = this.decodeToken(token);

		if (!jwtPayload) {
			return jwtPayload;
		}

		const jwt = new JWT({ token, userId: jwtPayload.sub });

		return jwt;
	}

	static async signUser(user): Promise<JWT> {
		const token = sign({}, auth.secretKey, {
			subject: user.id.toString(),
			expiresIn: auth.expiresIn,
		});

		const jwt = new JWT({ userId: user.id, token });

		return jwt;
	}
}
