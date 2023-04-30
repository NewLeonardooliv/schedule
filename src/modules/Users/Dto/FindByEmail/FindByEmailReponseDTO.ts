import { User } from '@modules/Users/Domain/User';

export type FindByEmailReponseDTO = {
  id?: number;
  email: User;
  password: string;
}
