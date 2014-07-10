

//Task-manager
//

var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

//menu option

var option = prompt("Add task to (P)lay, (H)ome, (S)chool, or (Q)uit: ");
// create blank arrays

var play = [], home = [], school = []

// run while loop to add items

while(option != 'q'){

  var item =prompt('Add a task: ');

  switch(option){

     case 'p': 
     play.push(item); 
     break;
  
     case 'h':
     home.push(item);
     break;

     case 's':
     school.push(item);
     break;
  }

  option = prompt("Add task to (P)lay, (H)ome, (S)chool, or (Q)uit: ");
}

console.log("Your play list includes the following tasks: ", play.join(' '));
console.log("Your home list includes the following tasks: ", home.join(' '));
console.log("Your school list includes the following tasks: ", chalk.blue(school));
