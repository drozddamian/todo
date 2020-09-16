import React from "react";
import styled from "styled-components";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import 'bootstrap/dist/css/bootstrap.css';

export default function TodoApp() {
  return (
    <Wrapper>
      <ContentContainer>
        <AddTodoSection>
          <Title>Todo List</Title>
          <AddTodo />
        </AddTodoSection>

        <TodosSection>
          <VisibilityFilters />
          <TodoList />
        </TodosSection>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

const Title = styled.h1`
  margin: 0;
`

const AddTodoSection = styled.div`
`
const TodosSection = styled.div`
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 640px) {
    flex-direction: row;
    
    ${TodosSection} {
      padding-left: 40px;
    }
  }
`
