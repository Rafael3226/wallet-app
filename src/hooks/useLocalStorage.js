export default class useLocalStorage {
  static get(tag) {
    return JSON.parse(localStorage.getItem(tag) || '');
  }
  static set(tag, data) {
    localStorage.removeItem(tag);
    localStorage.setItem(tag, JSON.stringify(data));
  }
  static remove(tag) {
    localStorage.removeItem(tag);
  }
  static clear() {
    localStorage.clear();
  }
}
