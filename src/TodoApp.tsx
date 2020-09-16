import React from "react";
import styled from "styled-components";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

export default function TodoApp() {
  return (
    <Wrapper>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: sans-serif;
`
