// // let js="amazing"
// // if(js==="amazing") alert("Javascript is not working ")
// // console.log(12 + 10+12)

// // //Assignment
// // let country='India'
// // let continent='asia'
// // let population=1000000000

// // console.log(country);
// // console.log(continent);
// // console.log(population);

// //Example-1

// let markWeight = 78;
// let JohnWeight = 92;

// let markheight = 1.69;
// let Johnheight = 1.95;

// var markBMI = markWeight / markheight ** 2;
// console.log(markBMI);
// var JohnBMI = JohnWeight / Johnheight ** 2;
// console.log(JohnBMI);

// var markHigherBMI = markBMI > JohnBMI;
// console.log(markHigherBMI);

// // //Example-2

// // markWeight=95;
// // JohnWeight=85;

// // markheight=1.88;
// // Johnheight=1.76;

// // markBMI=markWeight /(markheight**2);
// // console.log(markBMI);
// // JohnBMI=JohnWeight /(Johnheight**2);
// // console.log(JohnBMI);

// // markHigherBMI=markBMI > JohnBMI;
// // console.log(markHigherBMI);

// if (markBMI > JohnBMI) {
//   console.log(`mark BMI is higher than the ${markBMI - JohnBMI} .`);
// } else {
//   console.log(`John BMI is higher than the ${JohnBMI - markBMI}.`);
// }

// const gymDolphins = (96 + 108 + 89) / 3;
// const gymKoalas = (88 + 91 + 110) / 3;
// console.log(gymDolphins, gymKoalas);

// if (gymDolphins > gymKoalas) {
//   console.log("Dolphins is the winner!!!");
// } else if (gymDolphins == gymKoalas) {
//   console.log("Match is draw!!!");
// } else {
//   console.log("Koalas is the winner!!!");
// }

// const x = (100 + 100 + 100) / 3;
// const y = (100 + 100 + 100) / 3;
// console.log(x, y);

// if (x > y && x >= 100 && y >= 100) {
//   console.log("Dolphins is the winner!!!");
// } else if (x < y && y >= 100 && x >= 100) {
//   console.log("Koalas is the winner!!!");
// } else if (x == y && x >= 100 && y >= 100) {
//   console.log("match is draw");
// } else {
//   console.log("Match is unsucessfulll");
// }

// let day = 'wednesday   ';
// switch (day) {
//   case 'monday':
//     console.log("Today is monday");
//     break;

//   case 'Tuesday':
//     console.log("today is tuesday");
//     break;
//   case 'wednesday' :
//     console.log("Today is Wednesday");
//    break;

//   case 'Thursday' :
//     console.log("Today is Thursday");
//     console.log("Working from ofc");
//     break;

//   case 'Friday':
//     console.log("Today is Friday");
//     break
//   case 'Saturday':
//     console.log("scelra is sat");
//     break;

//   default:
//     console.log("Sunday Holiday");
// }

// Expression and Stament 
let me='Abhishek'
console.log(`i am ${12 - 10} my name is ${me}`);//THis is a  expression 

// console.log(console.log(`i am ${12 - 10} my name is ${me}`) if(me==='Abhishek'){
//     console.log("we can mix the statement and expression");
// });// this is invalid statement


//****************ternary operator ***************/

let age=23;
age>=18 ? console.log("U r age is low ") : console.log("age is higher ");

let store_value=age>18 ? console.log("u r is not good") : console.log("U can drink");
console.log(`u r eligible to ${age >= 18 ? " drive " : " can't drive"}`);

//*************************Example to practice*******************/
const bill=275;
let tip=.15 * bill;
let total_bill=bill >= 50 && bill <= 300 ? ` ${tip+bill}` :` ur bill : ${.20*bill + bill}`;
console.log(total_bill);


