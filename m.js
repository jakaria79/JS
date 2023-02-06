// const friends = [ 12, 45, 58, 78, 85, 98, 100];
// const partial = friends.slice(3,6);
// console.log(partial);

const men = [ 12, 45, 56, 65, 75, 85, 95, 100];
const partial = men.splice(3,6, 120, 150, 160);
console.log(partial);
console.log(men);

for ( i = 0; i <= 50; i++){
    if ( i % 3 === 0 && i % 5 === 0 ){
        console.log('foobar');
    }
    else if ( i % 3 === 0 ){
        console.log('foo');
    }
    else if (i % 5 === 0){
        console.log('bar');
    }
    else {
        console.log(i);
    }
}