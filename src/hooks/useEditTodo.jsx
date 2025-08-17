import { useState } from 'react';

const useEditTodo = () => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editDate, setEditDate] = useState('');

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
    setEditDate(todo.dueDate);
  };

  const handleEdit = (todos, setTodos) => {
    if (editText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === editingId
          ? { ...todo, text: editText, dueDate: editDate }
          : todo
      ));
      cancelEdit();
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
    setEditDate('');
  };

  return {
    editingId,
    editText,
    editDate,
    setEditText,
    setEditDate,
    startEdit,
    handleEdit,
    cancelEdit
  };
};

export default useEditTodo;
