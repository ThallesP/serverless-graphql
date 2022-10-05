import { TodoType } from "./../../types/TodoType";
import { CreateTodoArg } from "../../args/CreateTodoInput";
import { inject, injectable } from "tsyringe";
import { Args, Mutation, Resolver } from "type-graphql";
import { CreateTodoController } from "../../../../modules/todos/useCases/createTodo/CreateTodoController";
import { adaptHttpResponseToGraphQL } from "../../adapters/adaptHttpResponseToGraphQL";

@injectable()
@Resolver()
export class CreateTodoMutation {
  constructor(
    @inject(CreateTodoController)
    private readonly createTodoController: CreateTodoController
  ) {}

  @Mutation(() => TodoType)
  async createTodo(@Args() createTodoArg: CreateTodoArg) {
    const response = await this.createTodoController.handle(createTodoArg);

    return adaptHttpResponseToGraphQL(response);
  }
}
