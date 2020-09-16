import { applyMiddleware, createStore, Action } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./reducers";

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  return createStore(rootReducer, {}, middlewareEnhancer)
}

const store = configureStore()
export default store
