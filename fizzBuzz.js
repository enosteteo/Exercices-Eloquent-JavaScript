let fizz = 3;
let buzz = 5;
let limit = 100;

for(number = 0; number <= limit; number++){
    if ((number%fizz) & (number%buzz)) {
        console.log('FizzBuzz');  
    } 
    else if((number%fizz) === 0){
        console.log('Fizz');
    } 
    else if ((number%buzz) === 0) {
        console.log('Buzz');
    } 
}