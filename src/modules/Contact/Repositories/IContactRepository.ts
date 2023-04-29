import { CreateContactRequestDto } from '../Dto/CreateContactDto/CreateContactRequestDto';
import { CreateContactResponseDto } from '../Dto/CreateContactDto/CreateContactResponseDto';
import { FindContactByIdResponseDto } from '../Dto/FindContactByIdDto/FindContactByIdResponseDto';
import { findAllReponseDto } from '../Dto/findAllDto/findAllReponseDto';

export interface IContactRepository {
	create(createContactParams: CreateContactRequestDto): Promise<CreateContactResponseDto>
	findAll(): Promise<findAllReponseDto[]>
	findById(id: number): Promise<FindContactByIdResponseDto>
}