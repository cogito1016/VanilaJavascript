
/** 
 * 기본설명
 */
const callback = function(callbackValues, item){
    return [...callbackValues, item]; 
}//callback end - 콜백벨류에 item을 누적하는 콜백함수

const saying = ['veni','veni','veci'];
const initalValue = [];
const copy = saying.reduce(callback, initalValue); //콜백함수와 기본값을 전달받는다.
//기본값은 옵셔널이지만, 보통 지정한다.
//기본값을 저장하면 반환되는 값에 대한 단서를 제공할 수 있다.

console.log(copy);

/**
 * 예제 1
 */
const dogs = [
    {name:'max', size:'small',kind:'sigorzabzong',color:'black'},
    {name:'dony', size:'big',kind:'리트리버',color:'black'},
    {name:'saedo', size:'mid',kind:'리트리버',color:'brown'}
];

const colors = dogs.reduce((colors, dog)=>{
    return [...colors,dog.color];
},[])

console.log(colors);



/**
 * 예제 2
 */
//  const dogs2 = [
//     {name:'max', size:'small',kind:'sigorzabzong',color:'black'},
//     {name:'dony', size:'big',kind:'리트리버',color:'black'},
//     {name:'saedo', size:'mid',kind:'리트리버',color:'brown'}
// ];

// const colors2 = dogs2.reduce((carry,dog)=>{
//     if(carry.includes(dog.color)){
//         return carry;
//     }
// },[]); 
// TypeError: Cannot read properties of undefined (reading 'includes')
// reduce는 항상 누적값을 반환해야한다.


/**
 * 예제 3
 */

const filters = dogs.reduce((carry,dog)=>{
    carry.name.add(dog.name);
    carry.size.add(dog.size);
    carry.kind.add(dog.kind);
    carry.color.add(dog.color);
    return carry;
},
{
    name : new Set(),
    size : new Set(),
    kind : new Set(),
    color : new Set()
}
);

console.log(filters);

/**
 * 예제 4 
 */

const developers = [
    {name : 'Jeff', language : 'php'},
    {name : 'kim', language : 'java'},
    {name : 'joe', language : 'java'},
    {name : 'minji', language : 'cobol'},
];

const countByLanauge = developers.reduce((carry,developer)=>{
    if(!carry.has(developer.language)){
        carry.set(developer.language,1);
    }else{
        const count = carry.get(developer.language);
        carry.set(developer.language, count+1 );
    }

    return carry;
},
new Map());

console.log(countByLanauge);