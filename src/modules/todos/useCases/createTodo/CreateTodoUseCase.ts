import { inject, injectable } from "tsyringe";
import { ITodosRepository } from "../../repositories/ITodosRepository";

type CreateTodo = {
  name: string;

  completed?: true;
};

@injectable()
export class CreateTodoUseCase {
  constructor(
    @inject("TodosRepository")
    private todosRepository: ITodosRepository
  ) {}

  async execute({ name, completed }: CreateTodo) {
    const todo = await this.todosRepository.create({
      name,
      completedAt: completed ? new Date() : undefined,
    });

    return todo;
  }
}
