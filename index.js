import AuthApiGateway from './src/AuthApiGateway';
import RemarksApiGateway from './src/RemarksApiGateway';
import UsersApiGateway from './src/UsersApiGateway';

var RemarkApiClient = {
  get AuthApiGateway() { return AuthApiGateway; },
  get RemarksApiGateway() { return RemarksApiGateway; },
  get UsersApiGateway() { return UsersApiGateway; }
}

module.exports = RemarkApiClient;

