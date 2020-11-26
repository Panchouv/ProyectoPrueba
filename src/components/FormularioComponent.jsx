import React from 'react'
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'

const FormularioComponent = () => (
      <Form>
            <Form.Field width={8}>
                  <label>Nombres</label>
                  <input placeholder='Ingresar nombres' />
            </Form.Field>
            <Form.Field width={8}>
                  <label>Apellidos</label>
                  <input placeholder='Ingresar apellidos' />
            </Form.Field>
            <Form.Field width={8}>
                  <label>Email</label>
                  <input placeholder='Ingresar email valido' />
            </Form.Field>
            <Form.Field width={8}>
                  <label>Contraseña</label>
                  <input type="password" placeholder='Ingresar contraseña' />
            </Form.Field>
            <Form.Field width={8}>
                  <label>Repetir contraseña</label>
                  <input type="password" placeholder='Ingresar nuevamente contraseña' />
            </Form.Field>
            <Form.Field>
                  <Checkbox label='De acuerdo con las condiciones' />
            </Form.Field>
            <Button type='submit'>Aceptar</Button>
      </Form>
)

export default FormularioComponent