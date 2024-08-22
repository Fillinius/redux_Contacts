import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useSelector } from 'react-redux'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const ContactListPage = () => {
  // переход на получение данных из reducer
  const contactsState = useSelector(
    (state: { contacts: ContactDto[] }) => state.contacts
  )
  const groupContactsState = useSelector(
    (state: { groupContacts: GroupContactsDto[] }) => state.groupContacts
  )
  //
  const [contacts, setContacts] = useState<ContactDto[]>(contactsState)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsState

    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      )
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState.find(
        ({ id }: { id: string }) => id === fv.groupId
      )

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        )
      }
    }

    setContacts(findContacts)
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
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
