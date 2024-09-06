import { DATA_GROUP_CONTACT } from 'src/__data__'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

const initialSateGroup: GroupContactsDto[] = DATA_GROUP_CONTACT
export const groupContactsReducer = (
  state = initialSateGroup,
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
