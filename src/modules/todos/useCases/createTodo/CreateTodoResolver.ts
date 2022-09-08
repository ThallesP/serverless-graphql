import { inject, injectable } from "tsyringe";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

@injectable()
export class CreateTodoResolver {
  constructor(
    @inject(CreateTodoUseCase)
    private readonly createTodoUseCase: CreateTodoUseCase
  ) {}

  async mutation(data: any) {
    const todo = await this.createTodoUseCase.execute(data);

    return todo;
  }
}
