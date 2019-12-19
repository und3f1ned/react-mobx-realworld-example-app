import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('commonStore')
@withRouter
@observer
class Home extends React.Component {
  render() {
    const { token, appName } = this.props.commonStore;
    if (token) {
      return <div>Logged in. Welcome to {appName}</div>;
    }
    return <div>Logged out</div>;
  }
}
export default Home;
