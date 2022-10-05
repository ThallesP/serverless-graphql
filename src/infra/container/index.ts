import { container } from "tsyringe";
import type { ITodosRepository } from "../../modules/todos/repositories/ITodosRepository";
import { PrismaTodosRepository } from "../../modules/todos/repositories/prisma/PrismaTodosRepository";

container.registerSingleton<ITodosRepository>(
  "TodosRepository",
  PrismaTodosRepository
);
