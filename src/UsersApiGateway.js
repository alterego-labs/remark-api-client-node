import APIGateway from './APIGateway';

class UsersApiGateway extends APIGateway {
  constructor() {
    super();
  }

  /**
   * Sends push token for user
   * @example
   * UsersApiGateway.sendPushToken('sergio', {
   *   type: 'android', value: 'asdsada'
   * });
   * @param {string} login
   * @param {object} params - object with parameters: `type`, `value`
   */
  sendPushToken(login, params) {
    return this.postRequestTo('users/' + login + '/token', { token: params });
  }
}

export default new UsersApiGateway();
