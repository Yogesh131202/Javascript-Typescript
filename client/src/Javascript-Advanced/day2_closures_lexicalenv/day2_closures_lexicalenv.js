
// closures 
function outer() {
    let message = "Hello JavaScript";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();



