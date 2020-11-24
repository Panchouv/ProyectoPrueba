import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center' color='blue' dividing>
      <Icon name='book' circular/>
      <Header.Content>Listado de Alumnos</Header.Content>
    </Header>
    
    
  </div>
)

export default HeaderExampleUsersIcon