const firms = new Map()
.set(10,'iron man')
.set(20,'elsa')
.set(30,'anna');

function isAvailable(id){
    if(id<25){
        return true;
    }

    return false;
}

/**
 * 전통적인 for문
 */
// for(let i=0; i<firms.size; i++){
//     const firm = firms.
// } 전통적인 for문으로는 접근이 불가능


/**
 * 전통적인 for문
 * 컬렉션을 배열로 전환
 */
const entries = [...firms];

for(let i=0;i<entries.length;i++){
    const [id,name] = entries[i];

    if(isAvailable(id)){
        console.log(`${name}은 사용 가능`);
    }else{
        console.log(`${name}은 사용 불가`);
    }
}

//그 외 배열메서드인 reduce, find 등 다양하게 사용은 가능하다.
//그러나 한계가 명확
//find의 경우 - 최초의 경우만 반환
//reduce의 경우 - 마지막 경우만 반환

/**
 * 맵이터레이터 사용 
 */

for(const firm of firms){
    const [id,name] = firm;
    console.log(`${id}, ${name}`);
}