import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import { React } from 'react'
import './styles/App.css'

import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import UserEditProfileScreen from './screens/UserEditProfileScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/edit-profile" component={UserEditProfileScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
