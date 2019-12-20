import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
// import PrivateRoute from './PrivateRoute';

import Home from './Home';
import Login from './Login';
import Register from './Register';

@inject('commonStore')
@withRouter
@observer
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

export default App;
