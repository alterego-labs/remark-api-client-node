import 'whatwg-fetch';

export default class APIGateway {
  constructor() {
  }

  serialize(obj) {
    var str = [];
    for(var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

  getUrl(path) {
    return 'http://remark-api.alterego-labs.com/api/v1/' + path;
  }

  getUrlQuery(path, params) {
    let url = this.getUrl(path);
    return url + '?' + this.serialize(params);
  }

  getRequestHeaderFor(url, method, params) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    return new Request(url, {
      headers: headers, mode: 'cors', method: method, body: params
    });
  }

  getRequestTo(path, params) {
    let url = this.getUrlQuery(path, params);
    let header = this.getRequestHeaderFor(url, 'GET', params);
    return fetch(header).then(function (response) {
      return response.json();
    });
  }

  postRequestTo(path, params) {
    return this.requestTo('POST', path, params);
  }

  putRequestTo(path, params) {
    return this.requestTo('PUT', path, params);
  }

  requestTo(type, path, params) {
    let url = this.getUrl(path, params);
    return fetch(url, _buildRequestOptions(type, params))
      .then(this._parseJSON)
      .then(this._checkResponseStatus)
    //   .then((response_json) => {
    //     
    //   }
    //
    //   .then(function (response) {
    //   if (response.ok) {
    //     return response.json();
    //   } else {
    //     var error = new Error(response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // });
  }

  _buildRequestOptions(type, params) {
    return {
      method: type,
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      mode: 'cors'
    };
  }

  _parseJSON(response) {
    return response.json();
  }

  _checkResponseStatus(response_json) {
    // TODO: think about, maybe, more correct mechanism to check if response success or not...
    if (response_json.data.errors) {
      var error = new Error(response.statusText);
      error.response = response_json;
      // throw error;
      return Promise.reject(error);
    } else {
      return Promise.resolve(response_json);
    }
  }
}
