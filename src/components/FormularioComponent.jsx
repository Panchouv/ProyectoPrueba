import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormularioComponent = () => (
    <Form>
        <Form.Field>
          <label>Panxo</label>
          <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
          <label>Seba</label>
          <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    </Form>
)

export default FormularioComponent