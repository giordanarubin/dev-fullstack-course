var output = [];
var count = 1;

function fizzBuzz() {    
    if (count % 3 === 0 && count % 5 === 0) { 
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0){
        output.push("Fizz");
    }
    else if (count % 5 === 0){
        output.push("Buzz");
    }
    else {
        output.push(count);
    }        
    count += 1;
    console.log(output);
}

var pessoas = prompt("Quantas pessoas vão brincar?");

while (output.length < pessoas) {
    fizzBuzz();
}
