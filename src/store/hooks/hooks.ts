import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../store'
import { ContactAction } from '../reducers/contactsReducer'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch<Dispatch<ContactAction>>
