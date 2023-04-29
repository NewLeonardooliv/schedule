import { ContactEmail } from '@modules/Contact/Domain/ContactEmail';
import { ContactPhone } from '@modules/Contact/Domain/ContactPhone';

export type FindContactByIdResponseDto = {
    id: number
    name: string
    surname: string
    profile_pic?: string
    phone?: ContactPhone[];
    email?: ContactEmail[];
}