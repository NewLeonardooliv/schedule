import { Entity } from '@core/domains/Entity';

export type AdressTypeProps = {
	type_name: string;
};

export class AdressType extends Entity<AdressTypeProps> {

	private constructor(props: AdressTypeProps, id?: number) {
		super(props, id);
	}

	static create(props: AdressTypeProps, id?: number) {
		return new AdressType(props, id);
	}
}
