import React from 'react'
import { Container, Form } from 'semantic-ui-react'
import FormularioComponent from '../components/FormularioComponent'

function Formulario() {
    return (
        <div className='formulario'> 
            <Container>
            <h1>Formulario</h1>
            <FormularioComponent/>
            </Container>
        </div>
    )
}

export default Formulario