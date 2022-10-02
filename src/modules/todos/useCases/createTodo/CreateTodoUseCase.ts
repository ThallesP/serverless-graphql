import { inject, injectable } from "tsyringe";
import { Todo } from "../../entities/Todo";
import { ITodosRepository } from "../../repositories/ITodosRepository";

interface CreateTodoParams {
  name: string;

  completedAt?: Date;
}

type CreateTodoResponse = Promise<Todo>;

@injectable()
export class CreateTodoUseCase {
  constructor(
    @inject("TodosRepository")
    private readonly todosRepository: ITodosRepository
  ) {}

  async execute({ name, completedAt }: CreateTodoParams): CreateTodoResponse {
    const todo = await this.todosRepository.save(
      new Todo({ name, completedAt })
    );

    return todo;
  }
}
