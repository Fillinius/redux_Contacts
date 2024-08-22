import { useEffect, useState } from 'react'

import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useSelector } from 'react-redux'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'

export const FavoritListPage = () => {
  // переход на получение данных из reducer
  const contactsState = useSelector(
    (state: { contacts: ContactDto[] }) => state.contacts
  )
  const favoriteContactsState = useSelector(
    (state: { favoriteContacts: FavoriteContactsDto }) => state.favoriteContacts
  )
  //
  const [contacts, setContacts] = useState<ContactDto[]>([])
  useEffect(() => {
    setContacts(() =>
      contactsState.filter(({ id }) => favoriteContactsState[0].includes(id))
    )
  }, [contactsState, favoriteContactsState])
  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
}
