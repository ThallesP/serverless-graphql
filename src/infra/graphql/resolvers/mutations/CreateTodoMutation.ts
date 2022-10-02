import { inject, injectable } from "tsyringe";
import { CreateTodoController } from "../../../../modules/todos/useCases/createTodo/CreateTodoController";
import { adaptHttpResponseToGraphQL } from "../../adapters/adaptHttpResponseToGraphQL";

@injectable()
export class CreateTodoMutation {
  constructor(
    @inject(CreateTodoController)
    private readonly createTodoController: CreateTodoController
  ) {}

  async mutate(data: any) {
    const response = await this.createTodoController.handle(data);

    return adaptHttpResponseToGraphQL(response);
  }
}
