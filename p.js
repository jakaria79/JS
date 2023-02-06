function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const myInches = 144;
const myFeet = inchToFeet(myInches);
console.log(myFeet);
 
function isEven(number){
    const reminder = number % 2;
    console.log(reminder);
 }
 isEven(200);


 function isLeapYear(year){
    const reminder = year % 4;
    if ( reminder=== 0){
        console.log('leap year', year);
    }
    else{
        console.log('not leap year', year)
    }
 }
 isLeapYear(1995);

 function getSumOfAnArray(numbers){
    let sum = 0;
    for ( let i = 0; i < numbers.length ; i++ ){
      const index = i;
      const element = numbers[index];
      sum = sum + element;
      console.log(index, element, sum);
      }
      return sum;
  }
   const myNumbers = [ 12, 65, 45, 78, 32, 45, 91 ];
   getSumOfAnArray(myNumbers);


   function multiplication(number){
    let result = 1;
    for (let i = 1; i<=7; i++ ){
     result = result * 1 ;
     }
     return result;
   }
   const result = multiplication (7);
   console.log(result);