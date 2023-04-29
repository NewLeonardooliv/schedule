import { Entity } from '@core/domains/Entity';

export type ContactAdressProps = {
  id_contact: number;
  street: string;
  district: string;
  city: string;
  state: string;
  zip_code: string;
  adress_type: number;
  coutry: number;
}

export class ContactAdress extends Entity<ContactAdressProps> {
	private constructor(props: ContactAdressProps) {
		super({ ...props });
	}
	static create(props: ContactAdressProps) {
		const contact = new ContactAdress(props);

		return contact;
	}

	get id_contact() {
		return this.id_contact;
	}
  
	get street() {
		return this.street;
	}
  
	get district() {
		return this.district;
	}
  
	get city() {
		return this.city;
	}
  
	get state() {
		return this.state;
	}
  
	get zip_code() {
		return this.zip_code;
	}
  
	get adress_type() {
		return this.adress_type;
	}
  
	get coutry() {
		return this.coutry;
	}
  
}