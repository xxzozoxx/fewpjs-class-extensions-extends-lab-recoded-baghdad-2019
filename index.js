// Your code here
class Polygon {
  constructor(arr){
    this.arr = arr;
  }
  get countSides(){
    return this.arr.length
  }
  get perimeter(){
    return this.arr.reduce((init,s) => {return s = init + s},0)
  }
}
class Triangle extends Polygon {
  get isValid (){
    if (this.arr.length !== 3) return;
  }
}