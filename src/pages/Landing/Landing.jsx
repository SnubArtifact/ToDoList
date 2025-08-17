import React from 'react'
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'
import AddTodo from '../../components/AddTodo/AddTodo'
import useLocalStorage from '../../hooks/useLocalStorage'

const Landing = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const handleAddTodo = (newTodo) => {
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <>
      <Header/>
      <div style={{display:"flex", gap:"60px", marginTop:"20px"}} >
        <TodoList todos={todos} setTodos={setTodos} />
        <AddTodo onAddTodo={handleAddTodo} />
      </div>
    </>
  )
}

export default Landing
