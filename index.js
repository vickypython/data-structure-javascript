// //stack,set,queue,Array,linkedlist,tree,weakmap
// class myFunc {
//   constructor() {
//     this.count = 0;
//     this.stack = [];
//     this.push = function (value) {
//       this.stack[this.count] = value;
//       this.count++;
//     };
//     this.pop = function () {
//       if (this.count === 0) {
//         return undefined;
//       }
//       this.count--;
//       const result = this.stack[this.count];
//       delete this.stack[this.count];
//       return result;
//     };
//     this.peek = function () {
//       return this.stack[this.count - 1];
//     };
//     this.size = function () {
//       return this.count;
//     };
//   }
// }
// const newStack = new myFunc();
// newStack.push(1);
// newStack.push(3);
// console.log(newStack.peek());
// console.log(newStack.pop());
// console.log(newStack.peek());
// console.log(newStack.size());
// const letter = [];
// const word = "bob";
// let rword = "";
// //pushing word to stack
// for (var i = 0; i < word.length; i++) {
//   letter.push(word[i]);
// }
// //popin out of stack and reversing
// for (var i = 0; i < word.length; i++) {
//   rword += letter.pop();
// }
// if (word === rword) {
//   console.log(word + " is a palindrome");
// } else {
//   console.log(word + "is not a palindrome");
// }
class mySet {
  constructor() {
    //the collection array
    var collection = [];
    //look for intersection
    this.values = function () {
      return collection;
    };
    this.has = function (element) {
      return collection.indexOf(element !== -1);
    };
    this.add = function (element) {
      if (!this.has(element)) {
        collection.push(element);
        return true;
      }
      return false;
    };
    this.remove = function (element) {
      if (this.has(element)) {
        index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
      }
      return false;
    };
    this.size = function () {
      return collection.length;
    };
    this.union = function (otherSets) {
      var unionSet = new mySet();
      const firstSet = this.values();
      const secondSet = otherSets.values();
      firstSet.forEach(function (element) {
        unionSet.add(element);
      });
      secondSet.forEach(function (element) {
        unionSet.add(element);
      });
      return unionSet;
    };
    this.intersection = function (otherSet) {
      const intersectionSet = new mySet();
      const firstSet = this.values();
      firstSet.forEach(function (element) {
        if (otherSet.has(element)) {
          intersectionSet.add(element);
        }
      });
      return intersectionSet;
    };
    this.different = function (otherSet) {
      const differentSet = new mySet();
      const firstSet = this.values();
      firstSet.forEach(function (element) {
        if (!otherSet.has(element)) {
          differentSet.add(element);
        }
      });
      return differentSet;
    };
    this.subset = function (otherSet) {
      const firstSet = this.values();
      return firstSet.every((value) => {
        return otherSet.has(value);
      });
    };
  }
}
var setA = new mySet();
var setB = new mySet();
setA.add(1);
setB.add("b");
setB.add("c");
setB.add(1);
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB));
console.log(setA.different(setB).values());
setC=new Set()
setD=new Set()
setC.add('a')
setD.add('b')
setD.add('c')
setD.add('a')
console.log(setC.has('a'));
console.log(setC.intersection(setD).values());
console.log(setC.subset(setD));
console.log(setC.different(setD).values());
setD.remove('a')
console.log(setD.values());


