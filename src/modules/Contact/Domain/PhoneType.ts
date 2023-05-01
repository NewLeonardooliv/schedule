import { Entity } from '@core/domains/Entity';

export type PhoneTypeProps = {
	typeName: string;
};

export class PhoneType extends Entity<PhoneTypeProps> {

	private constructor(props: PhoneTypeProps, id?: number) {
		super(props, id);
	}

	static create(props: PhoneTypeProps, id?: number) {
		return new PhoneType(props, id);
	}
}
