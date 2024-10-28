<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';
import { DATA_CONTACT } from 'src/__data__'
import { ContactDto } from 'src/types/dto/ContactDto'

const initialStateContact:ContactDto[]=[{
  id: "",
  address: "",
  birthday: "",
  name: "",
  phone: "",
  photo: ""
}]

export const contactsReducer = (
  state = initialStateContact,
  { type, payload }: { type: string; payload: ContactDto[] }
) => {
  switch (type) {
    case 'AddContact':
      return {
        ...state,
        state: state.concat(payload),
      }

    default:
      return state
  }
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContact,
})
