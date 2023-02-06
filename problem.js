function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood= 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood ;
    return totalWood;
}

const totalWood = woodCalculator(2, 5, 5);
console.log(totalWood);


 const phones = [
    { name: 'Xaomi', camera: 20, Storage: '64gnb', price : 25000, color:'silver' },
    { name: 'Realme', camera: 10, Storage: '64gnb', price : 28000, color:'silver' },
    { name: 'Symphoni', camera: 15, Storage: '64gnb', price : 22000, color:'silver' },
    { name: 'Oppo', camera: 12, Storage: '64gnb', price : 20000, color:'silver' },
    { name: 'Vivo', camera: 18, Storage: '64gnb', price : 29000, color:'silver' },
    { name: 'Nokia', camera: 10, Storage: '64gnb', price : 30000, color:'silver' },
 ];
 function cheapestPhone(phones){
    let cheapest = phones[0];
    for ( let i = 0; i<phones.length; i++){
        const phone = phones[i];
        if ( phone.price < cheapest.price){
             cheapest = phone;
        }
    }
    return cheapest; 
}
const mySelection = cheapestPhone(phones);
console.log(mySelection); 
