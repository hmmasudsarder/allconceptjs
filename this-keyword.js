// call(), bind(), apply(), function 
// Proble statement 

// const userDtails = {
//    name: "masud",
//    age: 23,
//    Designation: "web Developer",
//    printSomeIssue: function () {
      
//    }
// }
// console.log(userDtails.name);
function great() {
      console.log(`Mr ${this.name} is a ${this.Designation}`)
}
const userDtails = {
   name: "masud",
   age: 23,
   Designation: "web Developer",
}
great.call(userDtails)