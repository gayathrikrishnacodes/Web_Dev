//FOR LOOP





//just print name n times 

// for(let i = 1; i <= 5; i++){
//     console.log("Gayathri");
// }


//Even Numbers

// for(let i=2;i<=10;i+=2){
//     console.log(i);
// }


//Odd Numbers

// for(let i=1;i<=20;i+=2){
//     console.log(i);
// }

//COUNT DOWN


// for(let i=10;i>=0;i--){
//     console.log(i);
// }


//MULTIPLICATION TABLE


// let num=5;
// for(let i=0;i<=10;i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }



//Sum of Numbers

// let sum=0;
// for(let i=0;i<=9;i++){
//     sum+=i;
// }
//     console.log(sum);


//Loop through an array

// let array=['apple','orange','grape','kiwi','berry'];
// for(let i=0;i<=array.length;i++){
//     console.log(array[i]);
// }


//PRIME NUMBER


// let n =11;
// let isPrime=true;
//    if(n<=1){
//     isPrime=false;
//    }
//    else{
// for(let i=2;i<n;i++){
//  if(n%i===0){
//     isPrime=false;
//     break;
//  }

//     }
// }
// console.log(isPrime ? `${n} is a prime number `:`${n} is not a prime`);




//WHILE LOOP


// let i=1;
// while( i<=10){
//     console.log(i);
//     i++;
// }

//name printing

// let name=1;
// while( name<=5){
//     console.log('Gayathri');
// name++;
// }

//Even Numbers Using While


// let n=2;
// while(n<=10){
//     console.log(n);
//     n+=2;
    
// }


//Odd Number

// let n=1;
// while(n<=10){
//     console.log(n);
// n+=2;
    
// }



//DO WHILE


// let n=3;
// do{
//     console.log(n);
//     n++;
// }
// while(n<=10);



//BREAK & CONTINUE


// for(let i=2;i<=20;i++){
//     if(i===15){


        // break;

//         continue;
//     }
    
// console.log(i);
// }



//Day 10 Task


let arr=[20,11,29,38,48,57,67,66,91,82];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        console.log(arr[i]  +":is even");
    }
    else{
                console.log(arr[i] + ":is odd");


    }
}




let a=0;
let b=1;

for(let i=1;i<=10;i++){
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
}
