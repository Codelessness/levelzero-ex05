// ex05: print right/wrong if grater than 25..
var readlineSync = require('readline-sync');//ex02

var userName = readlineSync.question("what is your name? ");
var welcomeMessage = "Welcome " + userName;//ex03
console.log(welcomeMessage);
var userAge  = readlineSync.question(userName  +" : what is ashutosh age? " );

//conditional statement

if (userAge === "24"){
  console.log( userName + " you are Right!  you are welcome! ");
}else{
  console.log(userName + " Sorry. you are wrong : ")
}


//Programming is all about (input >> processing >> output)