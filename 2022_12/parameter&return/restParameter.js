const items = [
    [1,2,3,4],
    [1,2,3],
    [1,2,3,4,5]
]

function validateItemsLength(items){
    return items.every((element)=>element.length>=3);
}

console.log(validateItemsLength(items));
