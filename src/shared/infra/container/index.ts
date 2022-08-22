import { ITodosRepository } from "src/modules/todos/repositories/ITodosRepository";
import { PrismaTodosRepository } from "src/modules/todos/repositories/prisma/PrismaTodosRepository";
import { container } from "tsyringe";

container.registerSingleton<ITodosRepository>(
  "TodosRepository",
  PrismaTodosRepository
);
