import { DATA_CONTACT } from 'src/__data__'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'

const INITIALFAVORITECONTACTS = [
  DATA_CONTACT[0].id,
  DATA_CONTACT[1].id,
  DATA_CONTACT[2].id,
  DATA_CONTACT[3].id,
]

export const favoriteContactsReducer = (
  state = INITIALFAVORITECONTACTS,
  { type, payload }: { type: string; payload: FavoriteContactsDto }
) => {
  switch (type) {
    case 'addFavoriteContact':
      return {
        ...state,
        state: state.concat(payload),
      }

    default:
      return state
  }
}
