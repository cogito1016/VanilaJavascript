
function makeCounter(){

    let count=0;

    return function(){
        return count++;
    };
}//makeCounter() end

let count = makeCounter();
let count2 = makeCounter();

alert(count()); //0
alert(count()); //1
alert(count2()); //?
alert(count2()); //?

