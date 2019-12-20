import { observable, action, reaction } from 'mobx';
// import agent from '../agent';

class CommonStore {
  @observable appName = 'Login application';

  @observable token = null;

  @observable appLoaded = false;

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      },
    );
  }

  @action setToken(token) {
    this.token = token;
  }

  @action setAppLoaded() {
    this.token = window.localStorage.getItem('jwt');
    this.appLoaded = true;
  }
}

export default new CommonStore();
