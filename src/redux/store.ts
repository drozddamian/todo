import { applyMiddleware, createStore, Action } from "redux";
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from "./reducers";

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
