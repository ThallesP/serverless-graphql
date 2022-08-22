import { Todo } from "@prisma/client";
import { prismaClient } from "src/shared/infra/prisma/prismaClient";
import { injectable } from "tsyringe";
import { ICreateTodoRepository, ITodosRepository } from "../ITodosRepository";

@injectable()
export class PrismaTodosRepository implements ITodosRepository {
  async create({ name, completedAt }: ICreateTodoRepository): Promise<Todo> {
    const todo = await prismaClient.todo.create({
      data: { name, completedAt },
    });

    return todo;
  }
}
