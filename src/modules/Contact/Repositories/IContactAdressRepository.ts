import { AdressType } from '../Domain/AdressType';
import { ContactAdress } from '../Domain/ContactAdress';

export interface IContactAdressRepository {
	create(id_contact: number, createContactParams: ContactAdress): Promise<void>
	getAllAdressType(): Promise<AdressType[]>;
}