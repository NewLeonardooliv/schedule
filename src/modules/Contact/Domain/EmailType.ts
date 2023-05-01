import { Entity } from '@core/domains/Entity';

export type EmailTypeProps = {
	type_name: string;
}

export class EmailType extends Entity<EmailTypeProps> {
	private constructor(props: EmailTypeProps, id?: number) {
		super(props, id);
	}

	get type_name(): string {
		return this.type_name;
	}

	static create(props: EmailTypeProps, id?: number) {
		return new EmailType(props, id);
	}
}
