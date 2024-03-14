
let a = 10;
let b = 5;

function add_num(num1, num2) {
    const total = (num1 + num2)
    return total
}

let result1 = add_num(a, b)
let result2 = add_num(4, 5)



/*--------------------------------------------Execution Context Concept-------------------------------------------*/

/*

Whenever a program is executed in javascript so global context object is made (this) which could be a window object in
browser or in runtime environment like node js it would be {} and it is set into a callstack.

There are two process of any execution : 1) Memory phase    2) Execution phase

Memory phase : Memory is allocated into this phase in js.

    a = undefined;
    b = undefined;
    add_num = declaration
    result1 = undefined;
    result2 = undefined;

Execution phase : Execution will be done into this phase.

    a = 10;
    b = 5;
    We cannot pass the value into a function add_num without calling it so execution will come into the line number 9 at 
    result1.

    Now there is another twist result1 is also dependent on the calling of add_num function so whenever function is called
    in js that function is put into the callstack which follows LIFO and above two phases memory phase and execution phase
    are implemented into deep dive manner means a new sandbox is created here.

    Memory phase :

        num1 = undefined;
        num2 = undefined;
        total = undefined;

    Execution phase :

        num1 = 10;
        num2 = 5;
        total = 15;

        Now this total value will be replaced into calling of add_num and passed further to global context object this after 
        that current sandbox will be deleted and wash out from the callstack.

        Finally result1 = 15;

    Similarly for second add_num function calling above both phases will be implemented again.

    Memory phase :

        num1 = undefined;
        num2 = undefined;
        total = undefined;

    Execution phase :

        num1 = 4;
        num2 = 5;
        total = 9;

        Now this total value will be replaced into calling of add_num and passed further to global context object this after 
        that current sandbox will be deleted and wash out from the callstack.

        result2 = 9;

    Execution context concept is done here.




*/