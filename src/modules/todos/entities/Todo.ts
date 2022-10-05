import { v4 as uuidV4 } from "uuid";

interface CreateTodoProps {
  id?: string;

  name: string;
  completedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TodoAttributes {
  id: string;

  name: string;
  completedAt?: Date;

  createdAt: Date;
  updatedAt?: Date;
}

export class Todo {
  private readonly attributes: TodoAttributes;

  get id(): string {
    return this.attributes.id;
  }

  get name(): string {
    return this.attributes.name;
  }

  get completedAt(): Date | undefined {
    return this.attributes.completedAt;
  }

  get createdAt(): Date {
    return this.attributes.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.attributes.updatedAt;
  }

  constructor(props: CreateTodoProps) {
    this.attributes = {
      id: props.id ?? uuidV4(),
      name: props.name,
      completedAt: props.completedAt,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt,
    };
  }
}
