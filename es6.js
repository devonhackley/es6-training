'use strict';
/* Arrow Functions */
() => 3
x => 3
(...x) => 3 //parameter list
(x,y) => x+y //multiple parameters
var foo = => 3 //headless arrow Functions
x => ({ y: x }) //if wanting to return object

/* Promises & This */
p.then(v => v.id)
p.then( function extractId(v) { return v.id }) //better version
var obj = {
  id: 42,
  foo: function foo(){
    setTimeout(() => {
      console.log(this.id)
    },100)
  }
} //best case
obj.foo();


/*Block Scoping */

/** Let vs Var **/
function foo(x,y){
  //var tells us that we want to use the variable across the entire function, let is only accessible to the block it was declared
  if(x > y){
    let temp =x; //temp is only within the if block
    x = y
    y = temp
  }
}

/** Closures & Blocks **/
function foo(x,y){
  //closure allows a function to remember variables outside of scope
  for(let i=0; i<10; i++){ // let creates a new i for each iteration
    $('#btn' +i).click(function(){
      console.log("button " + i + " was clicked");
    })
  }
}


/** Default values **/

function foo(x){ //imperative form
  x = x || 42; //default values
}
function foo(x=42){ //declarative form
}
foo.apply(null,[])//will still give us 42

/** Lazy Expressions **/
