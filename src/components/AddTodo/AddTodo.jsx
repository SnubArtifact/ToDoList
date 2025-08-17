import React from 'react'
import useAddTodo from '../../hooks/useAddTodo';
import './AddTodo.css';

const AddTodo = ({ onAddTodo }) => {
  const { todoInput, handleInputChange, addTodo } = useAddTodo(onAddTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div className='add-todo-section'>
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={todoInput.task}
            onChange={handleInputChange}
            placeholder="Enter task"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={todoInput.dueDate}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit" className="add-button">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
