import { Contact } from '@modules/Contact/Domain/Contact';
import { CreateContactRequestDto } from '@modules/Contact/Dto/CreateContactRequestDto';
import { IContactRepository } from '../../IContactRepository';

export class ContactRepositoryInMemory implements IContactRepository {
	private contacts: Contact[] = [];
	private static INSTANCE: ContactRepositoryInMemory;

	private constructor() {
		this.contacts = [];
	}

	public static getInstance(): ContactRepositoryInMemory {
		if (!ContactRepositoryInMemory.INSTANCE) {
			ContactRepositoryInMemory.INSTANCE = new ContactRepositoryInMemory();
		}

		return ContactRepositoryInMemory.INSTANCE;
	}

	async create({ name, surname, profile_pic }: CreateContactRequestDto): Promise<Contact> {
		const contactCreated = Contact.create({ name, surname, profile_pic });

		Object.assign(contactCreated, {
			name, surname, profile_pic
		});

		this.contacts.push(contactCreated);

		return contactCreated;
	}

	async findAll(): Promise<Contact[]> {
		return this.contacts;
	}
}