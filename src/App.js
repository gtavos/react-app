import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import { HeaderPage, MainRouter } from './shared/components';

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <HeaderPage />
        <MainRouter />
      </Router>
    </Container>
  )
}

export default App;
