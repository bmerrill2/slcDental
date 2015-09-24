//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name){
    if (name === 'Tyler') {
      return (true);
    } return (false);
  }
    
//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

var getName = function(){
  var nameInput = prompt("What is your name");
  return (nameInput);
}

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.


var welcome = function (){
  getName();
  alert("Welcome, " + nameInput);
}


//Next problem




//What is the difference between arguments and parameters?

  //Arguments are when you invoke the function, parameters are when you are defining the function


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //fales, null, undefined, 0, '', NaN. To check if something is falsy, you evaluate the statement in a boolean setting and it will return falsy if one of the above is listed



//Next Problem



//Create a function called myName that returns your name

var myName = function(){
  return('Brad');
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName)

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function(){
  return function (name){
    return name;
  }
}


//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

  //Code Here

//Now invoke innerFn.

innerFn(newMyName)