import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useDispatch, useSelector } from 'react-redux'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { loadContact } from 'src/store/reducers/contactsReducer'
import { useAppDispatch, useAppSelector } from 'src/store/hooks/hooks'

export const ContactListPage = () => {
  // переход на получение данных из reducer
  const contacts = useAppSelector((state) => state.contacts.entities)
  console.log(contacts)

  const isLoading = useAppSelector((state) => state.contacts.isLoading)
  // console.log('ontactsStateLoad', contactsStateLoad)

  const groupContactsState = useAppSelector((state) => state.groupContacts)

  // Получение данных с сервера
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadContact())
  }, [])
  //

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    // let findContacts: ContactDto[] = contactsState
    // if (fv.name) {
    //   const fvName = fv.name.toLowerCase()
    //   findContacts = findContacts.filter(
    //     ({ name }) => name.toLowerCase().indexOf(fvName) > -1
    //   )
    // }
    // if (fv.groupId) {
    //   const groupContacts = groupContactsState.find(
    //     ({ id }: { id: string }) => id === fv.groupId
    //   )
    //   if (groupContacts) {
    //     findContacts = findContacts.filter(({ id }) =>
    //       groupContacts.contactIds.includes(id)
    //     )
    //   }
    // }
    // setContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupContactsState}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {!isLoading &&
            contacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  )
}
