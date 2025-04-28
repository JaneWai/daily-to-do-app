import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/todo';
import { ListChecks } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500 bg-white rounded-lg shadow-md">
        <ListChecks className="h-16 w-16 mb-4 text-gray-300" />
        <h3 className="text-xl font-medium mb-2">No tasks yet</h3>
        <p className="text-sm">Add a new task to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
