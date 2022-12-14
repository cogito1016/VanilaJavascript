const items = [
    [1,2,3,4],
    [1,2,3],
    [1,2,3,4,5]
]

function validateItemsLength(items){
    return items.every((element)=>element.length>=3);
}

console.log(validateItemsLength(items));


//Arguments 객체
function getArguments(){
    return arguments;
}

console.log(getArguments('Blood','June'));

//기존의 방식
//Arguments를 활용한 Item Validation Check Function
function validateItemsLengthUsingArguments(max){
    const items = Array.prototype.slice.call(arguments,1);
    return items.every((element)=>element.length>=max);
}

console.log(validateItemsLengthUsingArguments(4,'hello','world')) // true
console.log(validateItemsLengthUsingArguments(4,'hello','hey')) // false
