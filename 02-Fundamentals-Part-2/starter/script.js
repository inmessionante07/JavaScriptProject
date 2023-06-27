'use strict';//Need to declare at the starting the code for the security ,show visible mistake helping us find the code error bug in console. always turn on the strict cod e 

// let hasDriverLicence=false;
// const passTest=true;

// if(passTest) hasDriverLicence=true;
// if(hasDriverLicence) console.log("U can drive");


//********Function*********/

function logger() {
    console.log('My name is Abhishek');
}

// //calling / running / invoking the function
// logger();
// logger();

//whenever we call the the function then only it will get executed 
//Reused the code

function fruitProcessor(apples,oranges) {
    console.log(apples , oranges);
    const juice=`juice with ${apples} apples and ${oranges} oranges`;
    return juice;
    
}

const mixedJuice=fruitProcessor(5,2);
console.log(mixedJuice);

const num=Number('24');
console.log(typeof(num),num);


//***********Function Declaration different type************/
//We call the function before define it
const age3=calAge1(1990);
console.log(age3);
function calAge1(birthYear) { //Parameter

    return 2023 -birthYear;
    
}
const calAge=calAge1(1997);//Argument
console.log(calAge);

//*********Function without the name called anonomyous function************/
//FUNCTION EXPRESSION
// const age4=calAge2(2000);//ReferenceError: Cannot access 'calAge2' before initialization
console.log(age4);
const calAge2=function (birthYear) {
    return 2023 - birthYear
}
const age2=calAge2(1999);
console.log(calAge,age2);

