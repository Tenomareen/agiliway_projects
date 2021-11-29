import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import modalReducer from '../pages/Notes/reducers/modalReducer';
import noteDetailsReducer from '../pages/Notes/reducers/noteDetailsReducer';
import notesReducer from '../pages/Notes/reducers/notesReducer';
import rootSaga from '../pages/sagas/rootSaga';

const rootReducer = combineReducers({
  notes: notesReducer,
  noteDetails: noteDetailsReducer,
  modal: modalReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)), // was thunk
);

sagaMiddleware.run(rootSaga);

export default store;
