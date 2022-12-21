const dogs = [
    {name:'max', size:'small',kind:'sigorzabzong',color:'black'},
    {name:'dony', size:'big',kind:'리트리버',color:'black'},
    {name:'saedo', size:'mid',kind:'리트리버',color:'brown'}
];

//댕댕스와 필터조건을 인수로 받은 후 
//필터링 조건에 맞는 강아지의 이름만 모아서 반환하는 함수
function getDogsName(dogs, filter){
    const result = dogs.filter(filter);
    return result;
}
˜

console.log(getDogsName(dogs, (dog)=>dog.kind==='리트리버'));
// console.log(getDogsName(dogs, ))


const colorCheck = color => dog => dog['color'] === color;
console.log(getDogsName(dogs,colorCheck('black')));