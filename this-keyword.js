function greet(greeting) {
    console.log( this.name+ ', ' + greeting +', '+ this.job);
  }
  
  const person = { name: 'cr7', job: "footboll" };
 const team =["ayan", "monir", "madiha"];
 const leader = {
    name: "israt",
    job: "web Developer"
 }
  
  greet.apply(person, leader, team);  // Output: Hello, Alice!
  
  const hello = "Hello"