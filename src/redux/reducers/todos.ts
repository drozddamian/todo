import { ADD_TODO, TOGGLE_TODO, TodoActionTypes } from "../actionTypes";


type TodoInfo = {
  content: string;
  completed: boolean;
}

export interface TodosByIdDictionary {
  [key: number]: TodoInfo;
}

interface TodosState {
  allIds: number[];
  byIds: TodosByIdDictionary;
}

const initialState: TodosState = {
  allIds: [],
  byIds: {}
};

const todos = (state = initialState, action: TodoActionTypes): TodosState => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}

export default todos;
