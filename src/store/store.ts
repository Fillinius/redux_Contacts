import { legacy_createStore as createStore, combineReducers } from 'redux'
import { contactsReducer } from './reducers/contactsReducer'
import { groupContactsReducer } from './reducers/groupContactReducer'
import { favoriteContactsReducer } from './reducers/favoriteContactsReducer'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactsReducer,
  favoriteContacts: favoriteContactsReducer,
})

// export const store = createStore(rootReducer)

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})
