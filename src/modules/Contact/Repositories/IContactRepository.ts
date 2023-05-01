import { Contact } from '../Domain/Contact';
import { CreateContactRequestDto } from '../Dto/CreateContactDto/CreateContactRequestDto';
import { CreateContactResponseDto } from '../Dto/CreateContactDto/CreateContactResponseDto';
import { FindContactByIdResponseDto } from '../Dto/FindContactByIdDto/FindContactByIdResponseDto';

export interface IContactRepository {
	create(createContactParams: CreateContactRequestDto): Promise<CreateContactResponseDto>
	findAll(): Promise<Contact[]>
	findById(id: number): Promise<FindContactByIdResponseDto>
}