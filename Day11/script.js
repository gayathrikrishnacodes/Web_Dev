//1-Arrow Ftn Prints Multiple Times

// const greet=()=>{
//     console.log('Hello Good Morning....')
// }
// greet();
// greet();
// greet();

//2-Arrow Ftn

// let name=()=>{
//     console.log('Gayathri',"Krishna")
// }
// name();

//3-Pass Params Inside The Ftn

// let names=(f,l)=>{
//     return f + " "+l;
// }
//     console.log(names('Gayathri','Krishna'));


    //4-Default Params
    
    // const ages=(age=21)=>{
    //     console.log(age);

    // }
    // ages();

    //local scope
    // function test(){
    //     let agess=21;
    //     console.log(agess);
    // }


    //Counter


    // function counter(){
    //     let count=0;
    //     return function(){
    //         count++;
    //         console.log(count);
    //     };
    // }
    // const increament=counter();
    // increament();
    // increament();
    // increament();
    // increament();
    // increament();
    // increament();


    //Task


    let num1=Number(prompt("enter the 1st Number"));
    let num2=Number(prompt('enter the second number'));
    let operator=prompt('Enter the operator:(+,-,*,/)');

    if (operator== '+'){
        console.log(num1+num2);
    }else if(operator=='-'){
        console.log(num1-num2);
    }else if(operator=='*'){
        console.log(num1*num2);
    }else{
        console.log(num1/num2);
    }