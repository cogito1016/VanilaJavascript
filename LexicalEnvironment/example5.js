
let arr = [1,2,3,4,5,6,7];

function inBetween(a,b){
    return function(x){
        return x>=a&&x<=b;
    };
}//inBetween() end

function inArray(list){
    return function(x){
        return list.indexOf(x) != -1;
    };
}//inArray() end

alert(arr.filter(inBetween(3,6)));
alert(arr.filter(inArray([1,2,10])));