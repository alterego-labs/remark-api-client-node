import APIGateway from './APIGateway';

class AuthApiGateway extends APIGateway {
  constructor() {
    super();
  }

  /**
   * Makes request to login endpoint
   * @param {object} params - parameters which must be passed as request body
   * @example
   * AuthApiGateway.login(this.serialize()).then((response) => {
   *   Store.dispatch(receiveAccessToken(response.data.user));
   *   return response;
   * }).then((response) => {
   *   this.setState({ errors: response.data.errors });
   *   return response;
   * }).catch(function(ex) {
   *   return ex.response;
   * });
   */
  login(params) {
    return this.postRequestTo('login', params);
  }
}

export default new AuthApiGateway();
