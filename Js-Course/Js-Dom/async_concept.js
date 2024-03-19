
/*

    Js : Javascript is a synchronous approach just like old school language it means code will be executed
    line by line.

    Blocking Code                                                vs                              Non Blocking Code

    Restrict the flow of program means last one code to                   Does not restrict the flow of program means further execution
    complete before further execution.                                    can be executed and simunatenously some task are assigned to
                                                                          perform later due to async apis like settimeout, setinterval
                                                                          or fetch apis means promises.




    let a = 10;
    let b = 5;

    function add_num(num1, num2) {
        const total = (num1 + num2)

        setTimeout(()=>{
            console.log("Hurray Async");
        }, 4000)

        console.log(total);
    }

    add_num(a, b)


    Whenever a program is executed in javascript so global context object is made (this) which could be a window object in
    browser or in runtime environment like node js it would be {} and it is set into a callstack.

    There are two process of any execution : 1) Memory phase    2) Execution phase

    Memory phase : Memory is allocated into this phase in js.

        a = undefined;
        b = undefined;
        add_num = declaration

    Execution phase : Execution will be done into this phase.

        a = 10;
        b = 5;
        We cannot pass the value into a function add_num without calling it so execution will come into calling of add_num.

        Now there is another twist  whenever function is called in js that function is put into the callstack which follows LIFO
        and above two phases memory phase and execution phase are implemented into deep dive manner means a new sandbox is created here.

        Memory phase :

            num1 = undefined;
            num2 = undefined;
            total = undefined;

            One call is assigned all of sudden here due to setTimeout api to register this callback and assigned it further to
            task queue which could be high priority task queue when we have promises apis and one event loop is there which checks
            that async apis needs to be executed now that time it is then put it again into the callstack to execute later after some 
            specific time period.

            Meanwhile, further execution of a function or program will not stop and execution phase will come into a role now.

        Execution phase :

            num1 = 10;
            num2 = 5;
            total = 15;

            Now this total value will be consoled and passed further to global context object this after 
            that current sandbox will be deleted and wash out from the callstack.

            Now above two phases will be executed for setTimeout api now and same sandox will be created and vanished so on.
                                                    


    Note :   No approach is superior either synchronous or asynchronous it will totally depend on your use case.
*/
