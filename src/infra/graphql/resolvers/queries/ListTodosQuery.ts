import { injectable } from "tsyringe";
import { Query, Resolver } from "type-graphql";

@injectable()
@Resolver()
export class ListTodoQuery {
  @Query(() => String)
  async dummy() {
    return "dummy";
  }
}
