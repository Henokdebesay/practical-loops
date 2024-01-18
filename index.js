
// Loop through all numbers from 1 to 100.
for(let i = 1; i <= 100; i++){
    // If a number is divisible by 3, log “Fizz.”
    if(i % 3 === 0){
        console.log(i + " Fizz")  
    }else if(i % 5 === 0) {  // If a number is divisible by 5, log “Buzz.”
        console.log(i + " Buzz")
    } else if(i % 3 === 0 && i % 5 === 0){// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
        console.log(i + " Fizz Buzz")
    }else if(i % 3 != 0 || i % 5 != 0){ // If a number is not divisible by either 3 or 5, log the number.
        console.log(i);
    }
  }



let prime = "";

for (let i = 1; i <= 11; i++) {
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
  if(i == 1) i++;
   if ( i == 2 || i == 3 || i % 3 !== 0 && i % 2 !== 0) {
        console.log(i);
        prime += i; 
        break;
    } 
  }  
// As soon as you find the prime number, log that number and exit the loop.
console.log(`${prime} is the prime number`);









