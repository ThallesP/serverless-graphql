import { Todo } from "@prisma/client";

export interface ICreateTodoRepository {
  name: string;

  completedAt?: Date;
}

export interface ITodosRepository {
  create: ({ name, completedAt }: ICreateTodoRepository) => Promise<Todo>;
}
