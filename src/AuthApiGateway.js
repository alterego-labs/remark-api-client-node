import APIGateway from './APIGateway';

class AuthApiGateway extends APIGateway {
  constructor() {
    super();
  }

  /**
   * Makes request to login endpoint
   * @param {Object} params - Parameters object for login scenario
   * @param {String} params.login - A login which must be checked
   * @example
   * AuthApiGateway.login({ login: 'SomeUser001' })
   * .then((response_json) => {
   *   Store.dispatch(receiveAccessToken(response_json.data.user));
   *   return response_json;
   * }).catch(function(error) {
   *   var response_json = error.response;
   *   this.setState({ errors: response_json.data.errors });
   * });
   * @return {Promise}
   */
  login(params) {
    return this.postRequestTo('login', { user: { login: params.login } });
  }
}

export default new AuthApiGateway();
