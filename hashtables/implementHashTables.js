class HashTables {
  constructor(size) {
    this.table = new Array(size);
  }

  _hash(key) {
    let finalHash = 0;
    for (let i = 0; i < key.length; i++) {
      const charCode = key.charCodeAt(i);
      finalHash += charCode;
    }

    return finalHash;
  }

  set(key, value) {
    let hashedValue = this._hash(key);

    if (!this.table[hashedValue]) {
      this.table[hashedValue] = [];
    }

    this.table[hashedValue].push([key, value]);
    return this.table;
  }

  get(key) {
    let hashedValue = this._hash(key);

    // if there is no table
    if (!this.table[hashedValue]) {
      return null;
    }

    for (let val of this.table[hashedValue]) {
      // if key  matches
      if (val[0] === key) {
        // value
        return val[1];
      }
    }
  }

  keys() {
    if (!this.table.length) {
      return undefined;
    }

    let keysResult = [];

    // Loop through the entire array
    for (let i = 0; i < this.table.length; i++) {
      // Check if the array Item is not empty
      if (this.table[i] && this.table[i].length) {
        // Loop through all possible Collision
        if (this.table[i] > 1) {
          for (let j = 0; j < this.table[i].length; j++) {
            keysResult.push(this.table[i][j][0][0]);
          }
        } else {
          keysResult.push(this.table[i][0][0]);
        }
      }
    }

    return keysResult;
  }

  values() {
    if (!this.table.length) {
      return undefined;
    }

    let valuesResult = [];

    // Loop through the entire array
    for (let i = 0; i < this.table.length; i++) {
      // Check if the array Item is not empty
      if (this.table[i] && this.table[i].length) {
        // Loop through all possible Collision
        if (this.table[i] > 1) {
          for (let j = 0; j < this.table[i].length; j++) {
            valuesResult.push(this.table[i][j][0][1]);
          }
        } else {
          valuesResult.push(this.table[i][0][1]);
        }
      }
    }

    return valuesResult;
  }
}

const myHashTable = new HashTables(50);
myHashTable.set("apples", 500);
myHashTable.set("mango", 200);
myHashTable.set("juice", 10);
myHashTable.set("orange", 50);
myHashTable.get("orange");
myHashTable.keys();
myHashTable.values();
console.log(myHashTable);