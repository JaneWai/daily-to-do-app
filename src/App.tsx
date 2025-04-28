import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';
import { Todo } from './types/todo';

function App() {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <TodoForm addTodo={addTodo} />
          </div>
          
          <div className="md:col-span-2">
            <TodoFilter filter={filter} setFilter={setFilter} />
            <TodoList 
              todos={filteredTodos} 
              toggleComplete={toggleComplete} 
              deleteTodo={deleteTodo} 
            />
          </div>
        </div>
        
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Daily Task Manager &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
