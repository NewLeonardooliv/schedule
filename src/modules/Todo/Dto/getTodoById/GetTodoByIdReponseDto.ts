import { Priority } from '@modules/Todo/Domain/Priority';

export type GetTodoByIdReponseDto = {
  id: number;
  ds_list: string;
  priority: number;
}