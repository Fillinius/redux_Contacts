import { DATA_GROUP_CONTACT } from 'src/__data__'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const groupContactsReducer = (
  state = DATA_GROUP_CONTACT,
  { type, payload }: { type: string; payload: GroupContactsDto[] }
) => {
  switch (type) {
    case 'addGroupContact':
      return {
        ...state,
        state: state.concat(payload),
      }

    default:
      return state
  }
}
