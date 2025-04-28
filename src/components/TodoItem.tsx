import React from 'react';
import { Check, Calendar, Clock, Trash } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-5 mb-4 border-l-4 transition-all ${todo.completed ? 'border-green-500 bg-green-50' : 'border-indigo-500'}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <button
              onClick={() => toggleComplete(todo.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 transition-colors ${
                todo.completed 
                  ? 'bg-green-500 border-green-500 text-white' 
                  : 'border-gray-400 hover:border-indigo-500'
              }`}
            >
              {todo.completed && <Check className="h-4 w-4" />}
            </button>
            <h3 className={`text-lg font-semibold ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {todo.title}
            </h3>
          </div>
          
          {todo.description && (
            <p className={`ml-9 mb-3 text-sm ${todo.completed ? 'text-gray-500' : 'text-gray-600'}`}>
              {todo.description}
            </p>
          )}
          
          <div className="ml-9 flex flex-wrap gap-3 text-xs text-gray-500">
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>Created: {formatDate(todo.createdAt)}</span>
            </div>
            
            {todo.targetDate && (
              <div className={`flex items-center ${
                todo.completed ? 'text-green-600' : new Date(todo.targetDate) < new Date() ? 'text-red-500' : 'text-indigo-600'
              }`}>
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span>Due: {new Date(todo.targetDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
        
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Delete todo"
        >
          <Trash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
