import { inject, injectable } from "tsyringe";
import { HttpResponse } from "../../../../core/apresentation/HttpResponse";
import {
  created,
  serverError,
} from "../../../../core/apresentation/ResponseHelpers";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

interface CreateTodoRequest {
  name: string;
  completed: boolean;
}

@injectable()
export class CreateTodoController {
  constructor(
    @inject(CreateTodoUseCase)
    private readonly createTodoUseCase: CreateTodoUseCase
  ) {}

  async handle({ completed, name }: CreateTodoRequest): Promise<HttpResponse> {
    try {
      const todo = await this.createTodoUseCase.execute({
        name,
        completedAt: completed ? new Date() : undefined,
      });

      return created(todo);
    } catch (error) {
      return serverError(error);
    }
  }
}
