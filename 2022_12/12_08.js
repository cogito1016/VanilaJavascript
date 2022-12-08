let arr = [1,2,3,4];
let result;

if(arr.indexOf(1)){
    result = true;
}else{
    result = false;
}

console.log("indexOf - ");
console.log(result);
console.log(arr.indexOf(1));

console.log("Includes");
console.log(arr.includes(1));