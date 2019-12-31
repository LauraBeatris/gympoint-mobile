import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistReducers from './persistReducers';

// Setting the middlewares
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

// Creating the store
const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

// Running sagas
sagaMiddleware.run(rootSaga);

export { store, persistor };
