import React from 'react';
import logo from './logouv.png';
import './App.css';
import Alumnos from './views/Alumnos'
import { Container, Divider, Image } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Container>

        <Image left size='medium' src={logo} />
        <Divider/>

        <Alumnos/>

      </Container>
    </div>
  );
}

export default App;
