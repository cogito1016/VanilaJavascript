function makeArmy(){

    let shooters = [];
    let i = 0;
    while(i<10){
        let shooter = function(){
            alert(i);
        };
        shooters.push(shooter);
        i++;
    }//while end

    return shooters

}//makeArmy() end

let army=makeArmy();

console.log(army);