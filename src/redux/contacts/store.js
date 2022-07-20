import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import filterSlice from 'redux/filter/filter-slice';
import { apiContacts } from './contacts';

export const store = configureStore({
  reducer: {
    [apiContacts.reducerPath]: apiContacts.reducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiContacts.middleware),
});

// export default store;
setupListeners(store.dispatch);
