import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTodo, modifyTodoContent } from "../redux/actions";
import { ITodo } from "../types";
import { Button } from 'reactstrap';

interface Props {
  todo: ITodo;
}

interface TodoTextProps {
  isCompleted: boolean;
}

const Todo: React.FC<Props> = (props: Props) => {
  const { todo } = props
  const { id, completed, content } = todo

  const dispatch = useDispatch()
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false)
  const [todoContent, setTodoContent] = useState<string>(content)

  const isTodoCompleted = todo && completed
  const todoEmoji = isTodoCompleted ? "👌" : "👋"
  const editTodoButtonText = isEditingTodo ? 'save' : 'edit'


  const handleTodoClick = (todoId: number) => () => {
    if (isEditingTodo) { return }
    dispatch(toggleTodo(todoId))
  }

  const handleEditClick = (event) => {
    event.stopPropagation()

    if (!isEditingTodo) {
      setIsEditingTodo(true)
      return
    }
    dispatch(modifyTodoContent(id, todoContent))
    setIsEditingTodo(false)
  }

  const handleTodoContentChange = (event) => {
    const { value } = event.target
    setTodoContent(value)
  }

  const getTodoElement = () => {
    if (isEditingTodo) {
      return (
        <TodoInput
          type='text'
          value={todoContent}
          onChange={handleTodoContentChange}
        />
      )
    }
    return (
      <TodoText isCompleted={isTodoCompleted}>
        {content}
      </TodoText>
    )
  }

  const todoElement = getTodoElement()

  return (
    <Item onClick={handleTodoClick(id)}>
      <TodoContent>
        {todoEmoji}{" "}

        {todoElement}
      </TodoContent>

      {!isTodoCompleted && (
        <Button
          color={isEditingTodo ? 'success' : 'warning'}
          size='sm'
          onClick={handleEditClick}
        >
          {editTodoButtonText}
        </Button>
      )}
    </Item>
  )
}

const Item = styled.li`
  font-family: monospace;
  cursor: pointer;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TodoContent = styled.div``

const TodoText = styled.span`
  ${(props: TodoTextProps) => props.isCompleted && css`
    text-decoration: line-through;
    color: lightgray;
  `};
`

const TodoInput = styled.input`
  border: none;
  border-bottom: 1px solid blue;
  
  :focus {
    outline: none;
  }
`

export default Todo
