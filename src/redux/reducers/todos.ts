import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  MODIFY_TODO_CONTENT,
  TOGGLE_TODO,
  TodoActionTypes,
} from "../actionTypes";


type TodoInfo = {
  content: string;
  completed: boolean;
}

export interface TodosByIdDictionary {
  [key: number]: TodoInfo;
}

interface TodosState {
  isLoading: boolean;
  allIds: number[];
  byIds: TodosByIdDictionary;
}

const initialState: TodosState = {
  isLoading: false,
  allIds: [],
  byIds: {}
};

const todos = (state = initialState, action: TodoActionTypes): TodosState => {
  switch (action.type) {
    case ADD_TODO_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ADD_TODO_SUCCESS: {
      const { id, content } = action.payload;
      return {
        ...state,
        isLoading: false,
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
    case MODIFY_TODO_CONTENT: {
      const { id, newContent } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            content: newContent,
          }
        }
      };
    }
    default:
      return state;
  }
}

export default todos;
