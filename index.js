import AuthApiGateway from './src/AuthApiGateway';

var RemarkApiClient = {
  get AuthApiGateway() { return AuthApiGateway; }
}

module.exports = RemarkApiClient;

