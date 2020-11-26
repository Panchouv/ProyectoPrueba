import React from 'react'
import { Container, Divider, Grid, Header, Icon, Image } from 'semantic-ui-react'
import HeaderExampleUsersIcon from './../components/HeaderExampleUsersIcon'
import TableExamplePadded from './../components/TableExamplePadded'
import logo from './../logo.svg';

const Alumnos = () => (
    <div className='alumnos'>
        <Container>

            <HeaderExampleUsersIcon />
            <TableExamplePadded />

        </Container>
    </div>
)

export default Alumnos