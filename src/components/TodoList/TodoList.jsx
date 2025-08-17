import React from 'react';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useEditTodo from '../../hooks/useEditTodo';
import './TodoList.css';

const TodoList = ({ todos, setTodos }) => {
  const { deleteTodo, toggleTodo } = useDeleteTodo(todos, setTodos);
  const {
    editingId,
    editText,
    editDate,
    setEditText,
    setEditDate,
    startEdit,
    handleEdit,
    cancelEdit
  } = useEditTodo();

  return (
    <div className="todo-container">
      <table className="todo-table">
        <thead>
          <tr>
            <th className="status-header">Status</th>
            <th className="task-header">Task</th>
            <th className="due-date-header">Due Date</th>
            <th className="actions-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="status-cell">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
              </td>
              {editingId === todo.id ? (
                <>
                  <td className="task-cell">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="edit-input"
                      autoFocus
                    />
                  </td>
                  <td className="due-date-cell">
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      className="edit-input"
                    />
                  </td>
                  <td className="actions-cell">
                    <button onClick={() => handleEdit(todos, setTodos)} className="save-btn">Save</button>
                    <button onClick={cancelEdit} className="cancel-btn">Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td className="task-cell" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                  </td>
                  <td className="due-date-cell">{todo.dueDate}</td>
                  <td className="actions-cell">
                    <button onClick={() => startEdit(todo)} className="edit-btn">Edit</button>
                    <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;