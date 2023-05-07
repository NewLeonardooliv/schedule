import { User as PersistenceUser } from '@prisma/client';
import { User } from '../Domain/User';
import { Password } from '../Domain/Password';

export class UserMapper {
	static toDomain(raw: PersistenceUser) {
		return User.create({
			email: raw.email,
			password: Password.create(raw.password)
		}, raw.id);
	}
}