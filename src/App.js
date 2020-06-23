import React from 'react'
import { Provider } from "react-redux";
import store from './store';
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'




function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
   <Login/>
   <Signup/>
    {/* <Route exact path="/signup" component={Signup} />
   <Route exact path="/login" component={Login} /> */}
</div>
      </Router>
      </Provider>
  )
}
export default App;