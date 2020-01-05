import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { apiReducer } from "./api/reducers";
import { contentReducer } from "./content/reducers";
import { dataReducer } from "./data/reducers";

const rootReducer = combineReducers({
  api: apiReducer,
  content: contentReducer,
  data: dataReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
