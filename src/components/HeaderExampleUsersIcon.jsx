import React from 'react'
import { Divider, Grid, Header, Icon, Image } from 'semantic-ui-react'
import logo from './../logo.svg';

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center' color='blue' dividing>
      <Icon name='book' circular />
      <Header.Content>Listado de Alumnos</Header.Content>
    </Header>
    
    {/* <Image
      centered
      // size='large'
      // src='/images/wireframe/centered-paragraph.png'
      size='small'
      src={logo}
    /> */}
  </div>
)

export default HeaderExampleUsersIcon