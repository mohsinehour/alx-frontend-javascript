export default class HolbertonClass{
  constructor(size, location){
    this.size = size;
    this.location = location
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    return this._location;
  }
}
