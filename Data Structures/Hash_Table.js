class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      total = total * WEIRD_PRIME + char.charCodeAt(0) - 96;
    }
    return total % this.keyMap.length;
  }
  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
}

let ht = new HashTable();
ht.set("pink", "#ffc0cb");
ht.set("cyan", "#00ffff");
ht.set("maroon", "#800000");
console.log(ht.keyMap);
console.log(ht.get("pink"));
console.log(ht.get("cyan"));
console.log(ht.get("maroon"));
console.log(ht.get("purple")); 






