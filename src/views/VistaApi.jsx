import React from 'react'
import ApiComponent from '../components/ApiComponent'
import { Container } from 'semantic-ui-react'

function VistaApi() {
    return (
        <div className='vistaapi'> 
            <Container>
            <h1>Api</h1>
            <ApiComponent/>
            </Container>
        </div>
    )
}

export default VistaApi