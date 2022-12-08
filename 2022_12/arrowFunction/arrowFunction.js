// function key(){
//     return 123;
// }
const key = () => 123;
console.log(key());

// function greet(first, last){
//     return `hi ${first}, ${last}`;
// }
const greet = (first, last)=>`hi ${first}, ${last}`;
console.log(greet('kim','lee'));

function applyCustomGreeting(name, callback){
    return callback(name);
}
console.log(applyCustomGreeting('jay', (name)=>`${name}님 만세`));