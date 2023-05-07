import { Entity } from '@core/domains/Entity';

type PiorityProps = {
  type_name: string
}

export class Priority extends Entity<PiorityProps> {

	private constructor(props: PiorityProps, id?: number) {
		super(props, id);
	}

	static create(props: PiorityProps, id?: number) {
		return new Priority(props, id);
	}
}