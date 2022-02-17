import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
// import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers";
import postsSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = compose;
// create a makeStore function
const makeStore = () => {
  const store = createStore(
    rootReducer,
    composedEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(postsSaga);
  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore);
