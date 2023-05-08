//Q1: Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
function Parent(name) {
    this.name = name;
  }
  
  Parent.prototype.greet = function() {
    console.log(`Hello, this is ${this.name}`);
  }
  
  function Child(name) {
    Parent.call(this, name);
  }
  
  Child.prototype = Object.create(Parent.prototype);
  const child1 = new Child('Amit');
  child1.greet();
 
  //Q2:Write code to explain prototype chaining
  let a= {
    name1:"Amit",
    Langauge:"JavaScript"
  }
 console.log(a);

  let P={
    run:()=>{
       console.log("alert");
    }
  }
  P.__proto__={
    name2:"Kamble"
  }
  a.__proto__=P;
  a.run()
  console.log(a.name2)


//Q3:Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
Array.prototype.sum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
  }
  
  const arr1 = [20,30];
  const arr2 = [10, 20, 30];
  const arr3 = [50, 100, 150];
  console.log("arr1 sum :",arr1.sum());
  console.log("arr2 sum :",arr2.sum()); 
  console.log("arr3 sum :",arr3.sum()); 


//Q4 :Write a JavaScript function to retrieve all the names of object's own and inherited properties.
function getAllPropertyNames(obj) {
    const prps = [];
    const ownPrps = Object.getOwnPropertyNames(obj);
    prps.push(...ownPrps);
  
    const prt = Object.getPrototypeOf(obj);
  
    if (prt !== null) {
      const inheritedProps = getAllPropertyNames(prt);
      prps.push(...inheritedProps);
    }
    return prps;
  }
  