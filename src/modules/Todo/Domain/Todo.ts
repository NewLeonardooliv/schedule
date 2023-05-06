import { Entity } from '@core/domains/Entity';

export type TodoProps = {
	ds_list: string
	priority: number
};

export class Todo extends Entity<TodoProps> {
	private constructor(props: TodoProps, id?: number) {
		super(props, id);
	}

	create(props: TodoProps, id?: number) {
		return new Todo(props, id);
	}
}