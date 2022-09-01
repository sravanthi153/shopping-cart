import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducer from "Redux/reducers";

const persistConfig = {
  key: "root",
  storage,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const Store = createStore(
//   persistedReducer,
//   applyMiddleware(logger, thunk)
// );
export const Store = createStore(rootReducer, applyMiddleware(logger, thunk));
