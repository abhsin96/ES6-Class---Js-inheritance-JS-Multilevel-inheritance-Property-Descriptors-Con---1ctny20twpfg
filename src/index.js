class API {
  #secure;
  constructor(url) {
    this.url = url;
    this.method = "GET";
    this.#secure = false;
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(newUrl) {
    this.url = newUrl;
    this.#secure = newUrl.startsWith("https://");
  }
}

module.exports = { API };
