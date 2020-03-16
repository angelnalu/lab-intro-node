class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items.sort( (a,b) => a - b );
    this.length ++;
    }
  
  

  get(pos) {
    if (pos <= this.length){
        return this.items[pos];
      }
      throw new Error("OutOfBounds");
  }


  max() {
    if (!this.items.length)
          throw new Error("EmptySortedList");

        return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length)
          return this.items[0];

      throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((acc, val) => { return acc + val }, 0);
  }

  avg() {
    if (this.items.length)
        return this.sum() / this.length;

      throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
