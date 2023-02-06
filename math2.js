const friends = [12, 45, 54, 55, 65, 77, 85, 90];
const partial = friends.splice(2, 5);
console.log(partial);
console.log(friends);


const names = [ 'rony','kabul', 'abul','dabul','rabul', 'sabul', 'abul','rabul','gabul', 'kabul','dabul','rony' ,'sabul', 'jabul','gabul', 'fabul' ] 

function removeDuplicate(names){
    const unique = [];
    for(let i=0; i< names.length; i++){
       const name = names[i];
       if(unique.includes(name) === false){
        unique.push(name);
       }
    }
  return unique;
}
  
  const uniqueNames = removeDuplicate(names);
  console.log(uniqueNames);
