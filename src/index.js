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

const s = new API("http://api.com/api/hello");
console.log(s.isSecure()); // false

s.updateUrl("https://");
console.log(s.isSecure()); // true

console.log(s.url); // https://api. com/api/hello

console.log(s.method); // GET

console.log(s.secure); // undefined (because private field)

module.exports = { API };
