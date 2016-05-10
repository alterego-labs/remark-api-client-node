import chai, { expect } from 'chai';
import spies from 'chai-spies'

chai.use(spies);

import AuthApiGateway from '../src/AuthApiGateway';

describe('AuthApiGateway', () => {
  describe('#login', () => {
    it('calls postRequestTo with proper parameters', () => {
      var spy = chai.spy.on(AuthApiGateway, 'postRequestTo');
      AuthApiGateway.login({ login: 'aha' });
      expect(spy).to.have.been.called.with('login', { user: { login: 'aha'} });
    });
  });
});
