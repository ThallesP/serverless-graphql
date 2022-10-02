import { Todo } from "../../entities/Todo";
import { ITodosRepository } from "../ITodosRepository";

export class InMemoryTodosRepository implements ITodosRepository {
  private readonly todos: Todo[] = [];

  async save(todo: Todo): Promise<Todo> {
    const todoIndex = this.todos.findIndex((t) => t.id === todo.id);

    if (!todoIndex) {
      this.todos.push(todo);
      return todo;
    }

    const { completedAt, createdAt, id, name } = todo;
    const updatedTodo = new Todo({
      name,
      completedAt,
      createdAt,
      id,
      updatedAt: new Date(),
    });

    this.todos[todoIndex] = updatedTodo;

    return updatedTodo;
  }
}
