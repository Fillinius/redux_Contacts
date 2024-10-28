import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useSelector } from 'react-redux'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const GroupListPage = () => {
  // переход на получение данных из reducer
  const groupContactsState = useSelector(
    (state: { groupContacts: GroupContactsDto[] }) => state.groupContacts
  )

  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
}
