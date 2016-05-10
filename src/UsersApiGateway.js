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
   * @param {String} login
   * @param {Object} params - object with parameters
   * @param {String} params.type - A type of a push token
   * @param {String} params.value - A value of a push token
   */
  sendPushToken(login, params) {
    return this.postRequestTo('users/' + login + '/token', { token: params });
  }
}

export default new UsersApiGateway();
