import APIGateway from './APIGateway';

class AuthApiGateway extends APIGateway {
  constructor() {
    super();
  }

  /**
   * Makes request to login endpoint
   * @param {object} params - parameters which must be passed as request body
   * @example
   * AuthApiGateway.login({ user: { login: 'SomeUser001' } })
   * .then((response_json) => {
   *   Store.dispatch(receiveAccessToken(response_json.data.user));
   *   return response_json;
   * }).catch(function(error) {
   *   var response_json = error.response;
   *   this.setState({ errors: response_json.data.errors });
   * });
   */
  login(params) {
    return this.postRequestTo('login', params);
  }
}

export default new AuthApiGateway();
