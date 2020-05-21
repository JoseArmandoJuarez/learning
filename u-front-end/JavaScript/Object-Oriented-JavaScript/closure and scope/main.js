
/**
 * To recap: myName is a variable defined outside a function, hence it's a global 
 * variable in the global scope. In other words, myName is available for all functions to use.

But let's look closely at the other variable: you. you is referenced by introduce(), 
even though it wasn't declared within introduce()! This is possible because a nested function's 
scope includes variables declared in the scope where the function is nested (i.e., variables from 
    its parent function's scope, where the function is defined).

As it turns out, the introduce() function and its lexical environment form a closure. 
This way, introduce() has access to not only the global variable myName, but also the 
variable you, which was declared in the scope of its parent function, introduceMyself().
 */

const myName = 'Andrew';

function introduceMyself() {
  const you = 'student';

  function introduce() {
    console.log(`Hello, ${you}, I'm ${myName}!`);
  }

  return introduce();
}

introduceMyself();
// 'Hello, student, I'm Andrew!'