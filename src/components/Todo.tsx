import React from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";
import { ITodo } from "../types";

interface Props {
  todo: ITodo;
}

interface TodoTextProps {
  isCompleted: boolean;
}

const Todo: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch()

  const { todo } = props
  const { id, completed, content } = todo
  const isTodoCompleted = todo && completed
  const todoEmoji = isTodoCompleted ? "👌" : "👋"

  const handleTodoClick = (todoId: number) => () => {
    dispatch(toggleTodo(todoId))
  }

  return (
    <Item onClick={handleTodoClick(id)}>
      {todoEmoji}{" "}
      <TodoText isCompleted={isTodoCompleted}>
      {content}
    </TodoText>
    </Item>
  )
}

const Item = styled.li`
  font-family: monospace;
  cursor: pointer;
  line-height: 1.5;
`

const TodoText = styled.span`
  ${(props: TodoTextProps) => props.isCompleted && css`
    text-decoration: line-through;
    color: lightgray;
  `};
`

export default Todo
