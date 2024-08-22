import { legacy_createStore as createStore, combineReducers } from 'redux'
import { contactsReducer } from './reducers/contactsReducer'
import { groupContactsReducer } from './reducers/groupContactReducer'
import { favoriteContactsReducer } from './reducers/favoriteContactsReducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactsReducer,
  favoriteContacts: favoriteContactsReducer,
})

export const store = createStore(rootReducer)
