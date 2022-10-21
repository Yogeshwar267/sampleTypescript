import { legacy_createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/rootSaga";
import rootReducer from "./Reducers/RootReducer";

const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);


