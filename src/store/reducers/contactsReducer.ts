import { DATA_CONTACT } from 'src/__data__'
import { ContactDto } from 'src/types/dto/ContactDto'

export const contactsReducer = (
  state = DATA_CONTACT,
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
