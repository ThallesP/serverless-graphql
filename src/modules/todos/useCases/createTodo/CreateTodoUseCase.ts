import { Todo } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ITodosRepository } from "../../repositories/ITodosRepository";

interface CreateTodoParams {
  name: string;

  completed?: true;
}

type CreateTodoResponse = Promise<Todo>;

@injectable()
export class CreateTodoUseCase {
  constructor(
    @inject("TodosRepository")
    private readonly todosRepository: ITodosRepository
  ) {}

  async execute({ name, completed }: CreateTodoParams): CreateTodoResponse {
    const todo = await this.todosRepository.create({
      name,
      completedAt: completed ? new Date() : undefined,
    });

    return todo;
  }
}
