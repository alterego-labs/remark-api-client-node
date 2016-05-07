import API from './APIGateway';

class RemarksApiGateway extends APIGateway {
  constructor() {
    super();
  }

  getList(params, userLogin = null) {
    if (userLogin) {
      return this.getRequestTo('users/' + userLogin + '/messages', params);
    } else {
      return this.getRequestTo('messages', params);
    }
  }

  create(userLogin, params) {
    return this.putRequestTo('users/' + userLogin + '/messages', params);
  }
}

export default new RemarksApiGateway();
