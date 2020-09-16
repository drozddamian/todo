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
        <ContentSection>
          <Title>Todo List</Title>
          <AddTodo />
        </ContentSection>

        <TodosSection>
          <VisibilityFilters />
          <TodoList />
        </TodosSection>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  background-color: #F8F8F8;
  padding-top: 20px;
  min-height: 100vh;
  
  @media (min-width: 640px) {
    padding-top: 60px;
  }
`

const Title = styled.h1`
  color: #626A6C;
  margin: 0;
  padding-bottom: 40px;
  
  @media (min-width: 640px) {
    padding-bottom: 0;
  }
`

const ContentSection = styled.section`
  width: 100%;
`

const TodosSection = styled(ContentSection)`
  padding-top: 60px;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  max-width: 480px;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    max-width: 720px;
    
    ${TodosSection} {
      padding: 48px 0 0 40px;
    }
  }
`
