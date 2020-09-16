import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<string>('')

  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTodo(value)
  }

  const handleAddTodo = () => {
    dispatch(addTodo(todo))
    setTodo('')
  }

  return (
    <div>
      <input
        onChange={updateInput}
        value={todo}
      />
      <AddTodoButton onClick={handleAddTodo}>
        Add Todo
      </AddTodoButton>
    </div>
  )
}

const AddTodoButton = styled.button`
  margin-left: 0.5rem;
`

export default AddTodo
