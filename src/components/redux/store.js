import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore, persistReducer,
// FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import {reducer} from './reducer'


// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// }

// const customMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       if (typeof action === 'function') {
//        action(store.dispatch)
//         console.log(store)
//         return;
//       }
//       return next(action)
//     }
//   }
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer,
  // middleware: [customMiddleware],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);