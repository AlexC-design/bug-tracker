import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers(),
  composeEnhancers(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga);
