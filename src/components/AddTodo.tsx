import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Button, Input } from 'reactstrap';
import { useDispatch } from "react-redux";
import { addTodoWithTimeout } from "../redux/actions";

const AddTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<string>('')

  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTodo(value)
  }

  const handleAddTodo = () => {
    dispatch(addTodoWithTimeout(todo))
    setTodo('')
  }

  return (
    <div>
      <Input
        type="text"
        onChange={updateInput}
        value={todo}
      />
      <Button color="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
    </div>
  )
}

const AddTodoButton = styled.button`
  margin-left: 0.5rem;
`

export default AddTodo
