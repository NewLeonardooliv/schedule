import { Priority } from '@modules/Todo/Domain/Priority';

export type UpdateTodoRequestDto = {
  id: number
  ds_list: string
  priority: Priority
}