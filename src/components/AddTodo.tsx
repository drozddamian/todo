import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Button, Input } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { addTodoWithTimeout } from "../redux/actions";
import { RootState } from "../redux/reducers";

const AddTodo = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState<string>('')
  const { isLoading } = useSelector((state: RootState) => state.todos)

  const isAddButtonDisabled = isLoading || !todo.length

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
        maxlength='30'
        onChange={updateInput}
        value={todo}
      />

      <AddTodoButton
        color="primary"
        disabled={isAddButtonDisabled}
        onClick={handleAddTodo}
      >
        Add Todo
      </AddTodoButton>
    </div>
  )
}

const AddTodoButton = styled(Button)`
  margin-top: 12px;
  width: 100%;
  
  @media (min-width: 640px) {
    width: auto;
  }
`

export default AddTodo
