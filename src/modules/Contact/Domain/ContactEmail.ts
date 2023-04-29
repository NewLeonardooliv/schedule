import { Entity } from '@core/domains/Entity';

export type ContactEmailProps = {
	id_contact: number;
	email: string;
	email_type: number;
};

export class ContactEmail extends Entity<ContactEmailProps> {
	private constructor(props: ContactEmailProps, id?: number) {
		super(props, id);
	}

	static create(props: ContactEmailProps, id?: number) {
		return new ContactEmail(props, id);
	}

	get email(): string {
		return this.email;
	}

	get email_type(): number {
		return this.props.email_type;
	}
}
