import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './reducers/user-reducer.ts';
import { Provider } from 'react-redux';
import { authSlice } from './reducers/auth-reducer.ts';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { hospitalSlice } from './reducers/hospital-reducer.ts';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  users: userSlice.reducer,
  auth: authSlice.reducer,
  hospitals: hospitalSlice.reducer,
});

const persistRed = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistRed,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
