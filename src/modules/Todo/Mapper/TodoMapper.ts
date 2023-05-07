import { Todo as PersistenceTodo } from '@prisma/client';
import { Todo } from '../Domain/Todo';

export class TodoMapper {
	static toDomain(raw: PersistenceTodo) {
		return Todo.create({
			ds_list: raw.ds_list,
			priority: raw.priority
		}, raw.id);
	}
}