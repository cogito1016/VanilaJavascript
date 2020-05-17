

function jane() {
    const name = 'jane';
    const mid = 'A';
    const final = 'B+';

    return{
        getMid:()=>mid,
        getFinal: ()=> final,
        setMid: score=>mid=score,
        setFinal:score=>final=score,
    }

}

jane.getMid();
jane.getFinal();