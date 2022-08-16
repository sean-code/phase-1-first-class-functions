// First Test
function receivesAFunction(callback){
    callback();
    return;
}

// Second Test

function returnsANamedFunction(){
    return function namedFunction(){ //like a nested function
        console.log("before all");
    };

}
// Fourth and Fifth Test for Anonymous Function
function returnsAnAnonymousFunction(){
    return() => console.log("before all"); //using an arrow
};