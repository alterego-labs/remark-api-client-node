# RemarkAPI Client for Node.js apps

There are a lot of RemarkApp related projects that are written by node.js. But there is one common API for all of them.
So this repo contains node.js package which provides common gateway to access Remark API.

## Install

To install this package, please, run the next command in the terminal:

```
$ npm install alterego-labs/remark-api-client-node --save
```

## Usage

### Login

To be able to make requests to the login endpoint add the following line into the file in which you want to do that:

```javascript
import { AuthApiGateway } from 'remark-api-client-node';
```

And then you can run request and process responses something like this:

```javascript
AuthApiGateway.login({ login: 'SomeUser001' })
  .then((response_json) => {
    Store.dispatch(receiveAccessToken(response_json.data.user));
    return response_json;
  }).catch(function(error) {
    var response_json = error.response;
    this.setState({ errors: response_json.data.errors });
  });
```

### Send push token

Import appropriate class:

```javascript
import { UsersApiGateway } from 'remark-api-client-node';
```

Example of the common usage:

```javascript
UsersApiGateway.sendPushToken('sergio', {
  type: 'android', value: 'asdsada'
});
```
