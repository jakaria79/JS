function feetToInch(feet){
    const inches = 12 * feet;
    return inches;
}
const myInches= feetToInch(14);
console.log(myInches); 

function centiMeterToMeter(centiMeter){
    const meter = centiMeter / 100;
    return meter;
}
const myMeter = centiMeterToMeter(500);
console.log(myMeter);

const numbers = [12, 15, 25, 30, 35, 38, 40, 45, -50, 55, 58, 60];
        
  
      
        for (let i = 0; i<= numbers.length; i++){
            const number = numbers[i];
           if (number < 0 ){
                break;
            }
           console.log(number);
        }
    for ( let i = 7; i <= 19; i+= 2){
        console.log(i);
    }

    const area = [ 'Dhaka','Chittagong', 'Newyork','London', 'Istambul', 'Mosco' ];

    console.log(area.length);
    area.pop('Mosco');
    console.log(area);
    area.push('Tokiyo',' Beiging');
    console.log(area);
    area.unshift('Dhaka');
    console.log(area);


    const number = [ 10, 20, 45, 55, 65, 80, 88, 95, 98, 100];
    for(i = 0; i <= numbers.length; i++){
        const myNumber = number[i]; 
        if (myNumber < 80){
            continue;
        }
       console.log(myNumber);
    }

     function multiplication(num){
        const num1 = 80;
        const num2 = 60;
        const num3 = 90;
        const result = num1*num2*num3;
        return result;
     }
     const numberMultiplication = multiplication(80*60*90);
     console.log(numberMultiplication);


     const myLaptop = {
        Brand: 'dell' ,
        Price:55000,
        processor:'i8',
     }

      console.log(myLaptop);
      myLaptop.processor = 'i12';
      console.log(myLaptop);



      const bookPrint = [
        {name: "firstBook" , quantity: 10,   pages: 100 },
        {name: "secondBook" , quantity: 20,   pages: 200},
        {qname: "thirdBook" , quantity: 30,   pages: 300},
      ]; 

      function paperRequirements(books){
        let sum = 0;
        for ( let i =0; i<books.length; i++){
        const book = books[i];
        const bookTotal = book.quantity*book.pages;
        sum = sum + bookTotal;
        
        }
       return sum;
      }
      const totalPages = paperRequirements(bookPrint);
      console.log(totalPages);
