import { TodoAttributes } from "./../../../modules/todos/entities/Todo";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class TodoType implements TodoAttributes {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  completedAt?: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt?: Date;
}
