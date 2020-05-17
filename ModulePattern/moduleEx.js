

function jane() {
    const name = 'jane';
    const mid = 'A';
    const final = 'B+';

    return{
        getMid:()=>mid,
        getFinal: ()=> final,
    }

}

jane().getMid();
jane().getFinal();