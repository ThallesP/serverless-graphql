import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class CreateTodoArg {
  @Field()
  name: string;

  @Field()
  completed: boolean;
}
