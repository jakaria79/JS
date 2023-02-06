function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}

const myInches = 144;
const myFeet = inchToFeet(myInches);
console.log(myFeet);


function milesToKm(miles){
    const km = miles*1.6093;
    return km;
}
const myMiles = 10;
const myKm = milesToKm(myMiles);
console.log(myKm);

function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}
 const Inches = 168;
 const Feet = inchToFeet(Inches);
 console.log(myFeet);

 function isLeapYear(year){
    const reminder = year % 4;
    if (reminder === 0){
        console.log('leapYear', year);
    }
    else {
        console.log('notLeapYear', year);
    }

 }
isLeapYear(1952);

function  giveMoney(money){
    const orangePrice = 400;
    const applePrice = 300;
    const totalPrice = orangePrice + applePrice;
    const quantity  = money - totalPrice  ;
    return quantity;
  }
  const given =  giveMoney(1000);
  console.log('shopkeeper given: ' ,given );



  function multiplicationThirteen(num){
     for(let i = 1; i<=10;i++){
        console.log(num*i)
     } 
  }
  const number = 13;
  multiplicationThirteen(number);

  function findLeapYear(year){
    const reminder = year % 4;
    if (reminder === 0) {
        console.log('leapYear', year);
      }
     else {
        console.log('notLeapYear', year );
     } 
   } 
  
  findLeapYear(2024);

  let sum = 0;
  for(let i = 0; i<=7; i++ ){
    sum = sum + 1;
    console.log(i, sum);
  }

  
  



