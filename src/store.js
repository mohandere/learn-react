import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from "./middlewares/logger";
import crashReporter from "./middlewares/crashReporter";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, /* preloadedState, */ composeWithDevTools(
  applyMiddleware(logger, crashReporter),
));

export default store;
