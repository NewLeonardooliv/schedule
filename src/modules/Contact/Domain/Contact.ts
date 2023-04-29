import { Entity } from '@core/domains/Entity';

export type ContactProps = {
	id: number;
	name: string;
	surname: string;
	profile_pic?: string;
	is_active?: boolean;
	created_at?: Date
};

export class Contact extends Entity<ContactProps> {
	public readonly created_at: Date;

	private constructor(props: ContactProps) {
		super({ ...props });
	}

	static create(props: ContactProps) {
		const contact = new Contact(props);

		return contact;
	}

	get name() {
		return this.name;
	}

	get surname() {
		return this.surname;
	}

	get profile_pic() {
		return this.profile_pic;
	}

	get is_active() {
		return this.is_active;
	}
}
