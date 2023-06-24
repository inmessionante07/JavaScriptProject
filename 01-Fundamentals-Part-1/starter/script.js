
// let js="amazing"
// if(js==="amazing") alert("Javascript is not working ")
// console.log(12 + 10+12)

// //Assignment
// let country='India'
// let continent='asia'
// let population=1000000000

// console.log(country);
// console.log(continent);
// console.log(population);

//Example-1

let markWeight=78;
let JohnWeight=92;

let markheight=1.69;
let Johnheight=1.95;

var markBMI=markWeight /(markheight**2);
console.log(markBMI);
var JohnBMI=JohnWeight /(Johnheight**2);
console.log(JohnBMI);

var markHigherBMI=markBMI > JohnBMI;
console.log(markHigherBMI);

// //Example-2

// markWeight=95;
// JohnWeight=85;

// markheight=1.88;
// Johnheight=1.76;

// markBMI=markWeight /(markheight**2);
// console.log(markBMI);
// JohnBMI=JohnWeight /(Johnheight**2);
// console.log(JohnBMI);

// markHigherBMI=markBMI > JohnBMI;
// console.log(markHigherBMI);

if(markBMI > JohnBMI)
{
    console.log(`mark BMI is higher than the ${markBMI-JohnBMI} .`);
}else{
    console.log(`John BMI is higher than the ${JohnBMI-markBMI}.`);
}


const gymDolphins=(96+108+89)/3;
const gymKoalas=(88+91+110)/3;
console.log(gymDolphins , gymKoalas);

if(gymDolphins > gymKoalas)
{
    console.log("Dolphins is the winner!!!");
}else if(gymDolphins==gymKoalas){
    console.log("Match is draw!!!");
}else{
    console.log("Koalas is the winner!!!");

}

const x=(100+100+100)/3;
const y=(100+100+100)/3;
console.log(x , y);

if(x>y && x>=100 && y>=100)
{
    console.log("Dolphins is the winner!!!");

}else if (x<y && y>=100 && x>=100) {
    console.log("Koalas is the winner!!!");

}else if(x==y && x>=100 && y>=100) {
    console.log("match is draw");
}else{
    console.log("Match is unsucessfulll");
}







