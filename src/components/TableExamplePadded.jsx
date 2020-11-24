import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExamplePadded = () => (
  <Table padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Alumno</Table.HeaderCell>
        <Table.HeaderCell>Año de ingreso</Table.HeaderCell>
        <Table.HeaderCell>Estado</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Francisco Espinoza</Table.Cell>
        <Table.Cell>2014</Table.Cell>
        <Table.Cell>
          Alumno regular
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Sebastian Zelaya</Table.Cell>
        <Table.Cell>2014</Table.Cell>
        <Table.Cell>
          Alumno regular
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExamplePadded
