import React from 'react'
import { Container } from 'reactstrap'
import { Switch, Route } from 'react-router'
import { Home } from '../../../shared/components'


const MainRouter = () => (
  <Container className="main-content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/render-pdf" component={tempRenderPdf} />
      <Route path="/upload-file" component={tempUploadFile} />
    </Switch>
  </Container>
)

const tempRenderPdf = () => <h2>Render PDF</h2>
const tempUploadFile = () => <h2>Upload File</h2>

export default MainRouter