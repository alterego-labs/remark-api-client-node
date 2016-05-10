import nock from 'nock';
import chai, { expect } from 'chai';
import spies from 'chai-spies'

chai.use(spies);

import APIGateway from '../src/APIGateway';

nock.disableNetConnect();

describe('APIGateway', () => {
  var apiGateway = new APIGateway;

  describe('#requestTo', () => {
    context('when response is success', () => {
      before(() => {
        nock('http://remark-api.alterego-labs.com')
          .post('/api/v1/login', { user: { login: 'ahsdnsah' } })
          .reply(200, { data: { user: { login: 'ahsdnsah' } } });
      });

      it('processes only success case', (done) => {
        apiGateway
          .requestTo('POST', 'login', {user: { login: 'ahsdnsah' }})
          .then((response_json) => {
            expect(response_json).to.have.property('data');
            done();
          }).catch((error) => {
            done(error);
          });
      });
    });

    context('when response is failure', () => {
      before(() => {
        nock('http://remark-api.alterego-labs.com')
          .post('/api/v1/login', { user: { login: 'ahsdnsah' } })
          .reply(404, { data: { errors: ['User not found'] } });
      });

      it('processes only catch case', (done) => {
        apiGateway
          .requestTo('POST', 'login', {user: { login: 'ahsdnsah' }})
          .then((response_json) => {
            done(new Error('Response must be processed as failure!'));
          }).catch((error) => {
            var response_json = error.response;
            expect(response_json.data.errors.length).to.equal(1)
            done();
          });
      });
    });
  });

  describe('#postRequestTo', () => {
    it('calls requestTo with proper parameters', () => {
      var spy = chai.spy.on(apiGateway, 'requestTo');
      apiGateway.postRequestTo('login', { login: 'aha' });
      expect(spy).to.have.been.called.with('POST', 'login', {login: 'aha'});
    });
  });
});
