import { useState } from 'react';

const useDeleteTodo = (todos, onDelete) => {
  const deleteTodo = (id) => {
    onDelete(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    onDelete(updatedTodos); 
  };

  return { deleteTodo, toggleTodo };
};

export default useDeleteTodo;
