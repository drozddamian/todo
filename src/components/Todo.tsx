import React, { ChangeEvent, useState } from "react";
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

  const handleEditClick = (event: MouseEvent) => {
    event.stopPropagation()

    if (!isEditingTodo) {
      setIsEditingTodo(true)
      return
    }
    dispatch(modifyTodoContent(id, todoContent))
    setIsEditingTodo(false)
  }

  const handleTodoContentChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        <EditButton
          color={isEditingTodo ? 'success' : 'warning'}
          size='sm'
          onClick={handleEditClick}
          disabled={!todoContent.length}
        >
          {editTodoButtonText}
        </EditButton>
      )}
    </Item>
  )
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: monospace;
  cursor: pointer;
  line-height: 1.5;
  background-color: #FFFFFF;
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 4px;
`

const TodoContent = styled.div``

const TodoText = styled.span`
  ${(props: TodoTextProps) => props.isCompleted && css`
    text-decoration: line-through;
    color: lightgray;
  `};
`

const EditButton = styled(Button)`
  margin-left: 8px;
`

const TodoInput = styled.input`
  border: none;
  border-bottom: 1px solid #626A6C;
  
  :focus {
    outline: none;
  }
`

export default Todo
