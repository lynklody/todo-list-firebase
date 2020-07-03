import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Dashboard from './Dashboard'
import SignIn from './SignIn'

const App = () => {
    return (
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            {/* <Route path='/signup' component={SignUp} /> */}
          </Switch>
        </Container>
      </BrowserRouter>
    )
}

export default App;