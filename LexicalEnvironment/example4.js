


function Counter(){

    let count = 0 ;

    this.up = function(){
        return ++count;
    };

    this.down = function(){
        return --count;
    };
}//Counter() end

let counter = new Counter();

alert(counter.up());
alert(counter.up());
alert(counter.down ());