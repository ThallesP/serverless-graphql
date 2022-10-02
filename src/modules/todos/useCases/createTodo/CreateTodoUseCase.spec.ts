import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTodosRepository } from "../../repositories/inMemory/InMemoryTodosRepository";
import { ITodosRepository } from "../../repositories/ITodosRepository";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

let createTodoUseCase: CreateTodoUseCase;
let inMemoryTodosRepository: ITodosRepository;
describe("CreateTodoUseCase", () => {
  beforeEach(() => {
    inMemoryTodosRepository = new InMemoryTodosRepository();
    createTodoUseCase = new CreateTodoUseCase(inMemoryTodosRepository);
  });

  it("should be able to create a todo", async () => {
    const todo = await createTodoUseCase.execute({ name: "Todo" });

    expect(todo.id).not.toBeNull();
    expect(todo.name).toEqual("Todo");
  });
});
