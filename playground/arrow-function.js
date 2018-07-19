var square=(x)=>x*x;
// var square=x=>x*x;
// var square=(x)=>{
//   var result=x*x;
//   return result;
// };
//All three codes above are equivalent
console.log(square(9));

example-1
var user={
  name:'Andrew',
  sayHi:()=>{
    console.log(`Hi. I am ${this.name}.`); //this keyword doesn't work inside arrow functions.
  }
};
user.sayHi();

Output:
Hi. I am undefined.

modified example-1

var user={
  name:'Andrew',
  sayHi:()=>{
    console.log(arguments); //This doesn't work as the regular function below. This gives in output the global arguments.
    console.log(`Hi. I am ${this.name}.`); //this keyword doesn't work inside arrow functions.
  }
  sayHiAlt(){
    console.log(arguments);
    console.log(`Hi. I am ${this.name}.`); //regular function works with 'this' keyword.
  }
};
user.sayHiAlt(1,2,3);

output:
{'0':1, '1':2, '2':3}
Hi. I am Andrew.
