import { injectable } from "tsyringe";
import { prismaClient } from "../../../../infra/prisma/prismaClient";
import { Todo } from "../../entities/Todo";
import { ITodosRepository } from "../ITodosRepository";

@injectable()
export class PrismaTodosRepository implements ITodosRepository {
  async save({
    completedAt,
    createdAt,
    id,
    name,
    updatedAt,
  }: Todo): Promise<Todo> {
    const todo = await prismaClient.todo.upsert({
      update: {
        name,
        completedAt,
        createdAt,
        id,
        updatedAt: new Date(),
      },
      where: {
        id,
      },
      create: {
        completedAt,
        createdAt,
        id,
        name,
        updatedAt,
      },
    });

    return new Todo({
      ...todo,
      completedAt: todo.completedAt || undefined,
      updatedAt: todo.updatedAt || undefined,
    });
  }
}
