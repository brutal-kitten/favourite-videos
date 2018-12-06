class LocalStorage {
  constructor() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key]
  }

  setItem(key, string) {
    this.store[key] = string
  }

  removeItem(key) {
    this.store = {}
  }
}

global.localStorage = new LocalStorage();
