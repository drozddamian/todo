import React from "react";
import { Spinner } from 'reactstrap';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { ITodo } from '../types'
import Todo from "./Todo";
import { RootState } from "../redux/reducers";

const TodoList = () => {
  const visibilityFilter = useSelector((state: RootState) => state.visibilityFilter)
  const todoState = useSelector((state: RootState) => state.todos)
  const { isLoading } = todoState
  const todosByFilter = getTodosByVisibilityFilter(todoState, visibilityFilter)
  const hasAnyTodos = todosByFilter && todosByFilter.length

  const mapTodoToItems = (todo: ITodo) => (
    <Todo key={`todo-${todo.id}`} todo={todo} />
  )

  const getListContent = () => {
    if (isLoading) {
      return <Spinner color="warning" />
    }
    return hasAnyTodos
      ? todosByFilter.map(mapTodoToItems)
      : "No todos, yay! 🎉"
  }

  const listContent = getListContent()

  return (
    <ListWrapper>
      {listContent}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
  margin-top: 12px;
`

export default TodoList;
