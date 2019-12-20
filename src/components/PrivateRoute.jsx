import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('authStore', 'commonStore')
@observer
class PrivateRoute extends React.Component {
  render() {
    const { authStore, ...restProps } = this.props;
    if (authStore.currentUser) return <Route {...restProps} />;
    return <Redirect to="/" />;
  }
}
export default PrivateRoute;
