import { visibilityFilterType } from "../types";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

interface AddTodoAction {
  type: typeof ADD_TODO
  payload: {
    id: number;
    content: string;
  }
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO
  payload: {
    id: number;
  }
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction

interface SetFilterAction {
  type: typeof SET_FILTER
  payload: {
    filter: visibilityFilterType;
  }
}

export type FilterActionTypes = SetFilterAction
