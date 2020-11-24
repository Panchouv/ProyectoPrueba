import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderExampleUsersIcon from './components/HeaderExampleUsersIcon.jsx' 
import TableExamplePadded from './components/TableExamplePadded'
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Container>
        <HeaderExampleUsersIcon/>
        <TableExamplePadded/>
      </Container>
    </div>
  );
}

export default App;
