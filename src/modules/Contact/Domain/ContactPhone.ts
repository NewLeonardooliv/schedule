import { Entity } from '@core/domains/Entity';

export type ContactPhoneProps = {
	id?: number;
	id_contact: number;
	phone: string;
	phone_type: number;
};

export class ContactPhone extends Entity<ContactPhoneProps> {
	private constructor(props: ContactPhoneProps) {
		super(props);
	}

	static create(props: ContactPhoneProps) {
		return new ContactPhone(props);
	}

	update(phone: string, phone_type: number): void {
		this.props.phone = phone;
		this.props.phone_type = phone_type;
	}

	get phone(): string {
		return this.phone;
	}

	get phone_type(): number {
		return this.props.phone_type;
	}
}
