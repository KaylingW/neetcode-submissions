class PrefixTree {
  constructor() {
    this.root = {};
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }

      node = node[char];
    }

    node.isWord = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;

    for (const char of word) {
      if (!node[char]) {
        return false;
      }

      node = node[char];
    }

    return node.isWord === true;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;

    for (const char of prefix) {
      if (!node[char]) {
        return false;
      }

      node = node[char];
    }

    return true;
  }
}