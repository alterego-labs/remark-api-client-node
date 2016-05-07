import AuthApiGateway from './src/AuthApiGateway';
import RemarksApiGateway from './src/RemarksApiGateway';

var RemarkApiClient = {
  get AuthApiGateway() { return AuthApiGateway; }
  get RemarksApiGateway() { return RemarksApiGateway; }
}

module.exports = RemarkApiClient;

