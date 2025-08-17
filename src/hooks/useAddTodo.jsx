import { useState } from 'react';

const useAddTodo = (onAddTodo) => {
  const [todoInput, setTodoInput] = useState({
    task: '',
    dueDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodoInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addTodo = () => {
    if (todoInput.task.trim()) {
      const newTodo = {
        id: Date.now(),
        text: todoInput.task,
        dueDate: todoInput.dueDate,
        completed: false
      };
      onAddTodo(newTodo);
      setTodoInput({ task: '', dueDate: '' });
    }
  };

  return { todoInput, handleInputChange, addTodo };
};

export default useAddTodo;
