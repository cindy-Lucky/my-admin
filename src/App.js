import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Index from './views/Login/index'


class App extends React.Component{
  constructor(){
    super()
    this.state={}
  }

  render(){
    return(
      <div className="test">
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Index} exact></Route>
          </Switch>
        </BrowserRouter>
      </div>
      </div>
    )
  }
}


export default App;
