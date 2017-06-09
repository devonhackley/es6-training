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
