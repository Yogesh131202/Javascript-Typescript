Execution Context = An Execution Context is an environment in which JavaScript code is evaluated and executed.
   1. Global Execution Context (GEC) – when the program starts.
   2. Function Execution Context (FEC) – when function is called.
   3. Creation Phase - JavaScript prepares the environment before executing statements.
   4. Execution Phase - JavaScript executes statements in order.
   5. Call Stack - The Call Stack is a JavaScript mechanism that manages function execution contexts using the LIFO (Last In, First Out) principle.
   6. How are Function Calls Managed - JavaScript creates a new Function Execution Context. -> It creates the function's local environment. -> It initializes parameters and local declarations. -> The context is pushed onto the Call Stack. -> The function executes. -> When the function returns, its context is popped from the stack.



Hoisting = Hoisting is JavaScript's behavior of processing variable and function declarations during the creation phase of an execution context before executing the code.
    1. var = instially undefined
    2. let and const = referance error (Time Dead Zone (TDZ))
    3. functional hoisting = funstion can access before the functiona actually write in code;

Lexical Scope = Scope determines where a variable or function can be accessed in JavaScript
    1. Global Scope -  can be asscess anywhere in code 
    2. Function Scope - can be access in function only
    3. Block Scope - can be access in certain block only


