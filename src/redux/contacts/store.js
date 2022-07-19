import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { apiContacts } from './contacts';

export const store = configureStore({
  reducer: {
    [apiContacts.reducerPath]: apiContacts.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiContacts.middleware),
});

// export default store;
setupListeners(store.dispatch);
