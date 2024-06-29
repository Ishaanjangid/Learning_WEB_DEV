// console.log("Hello,World");7

// Creating employee object

// let employee1 = {
//   "Employee Id": "xyz",
//   name: "Ishaan",
//   age: 18,
//   gender : "M",
//   experence: 4,
//   full_name: function() {
//     console.log(`My nmae is ${this.name}`);
//   }
// }

// let employee2 = employee1;

// console.log(employee1);
// console.log(employee2);

// employee1.name = "Ramesh";

// console.log(employee1.full_name());
// console.log(employee2);

let new_sym = Symbol(123);

let user_1 = {
  name : "Ishaan",
  id: 203,
  gender: "M",
  department: "tech",
  [new_sym]: 678
}

// console.log(user_1);

// console.log(user_1.department);

// ********* Adding function as a property ***************

user_1.full_name = function() {
  console.log(`Hello, my name is ${this.name}`);
}
// console.log(user_1.full_name());

// ************* Adding symbol *****************

user_1.emp_id = Symbol("123abc");

console.log(user_1);


// ********* Creating object usting 
