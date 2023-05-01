import { IContactRepository } from '@modules/Contact/Repositories/IContactRepository';
import { CreateContactRequestDto } from '@modules/Contact/Dto/CreateContactDto/CreateContactRequestDto';
import { IContactPhoneRepository } from '@modules/Contact/Repositories/IContactPhoneRepository';
import { IContactEmailRepository } from '@modules/Contact/Repositories/IContactEmailRepository';
import { IContactAdressRepository } from '@modules/Contact/Repositories/IContactAdressRepository';

export class CreateContactUseCase {
	constructor(
		private contactRepository: IContactRepository,
		private contactPhoneRepository: IContactPhoneRepository,
		private contactEmailRepository: IContactEmailRepository,
		private contactAdresRepository: IContactAdressRepository,
	) { }

	async execute({ name, surname, profile_pic, phone, email, adress }: CreateContactRequestDto) {
		const contact = await this.contactRepository.create({
			name,
			surname,
			profile_pic
		});

		phone?.map(async element => {
			await this.contactPhoneRepository.create(contact.id, element);
		});

		email.forEach(async element => {
			await this.contactEmailRepository.create(contact.id, element);
		});

		adress.forEach(async element => {
			await this.contactAdresRepository.create(contact.id, element);
		});
	}
}