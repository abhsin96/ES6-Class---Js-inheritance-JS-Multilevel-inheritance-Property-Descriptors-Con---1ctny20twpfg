class API {
  #secure;
  url;
  method;

  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#secure = url.startsWith('https');
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(newUrl) {
    this.#secure = newUrl.startsWith('https');
    this.url = newUrl;
  }
}

export default API;