const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    equipment: 'Cannon',
    format: 'digital',
    strange1: 'hi1',
    strange2: 'hi2'
}

// function displayPhoto(photo){
//     const title = photo.title;
//     const photographer = photo.photographer;
//     const equipment = photo.equipment;
//     const format = photo.format;

//     return `${title} ${photographer} ${equipment} ${format}`;
// }

function displayPhoto({title, photographer, equipment, format, appendedData="기본값입니다", ...restParameter}){
    console.log( `${title} ${photographer} ${equipment} ${format} ${appendedData}` );
    console.log('나머지 연산자를 사용하여 추가전송된 데이터를 봅니다.');
    console.log(restParameter);
}

displayPhoto(landscape);

//배열에도 가능하다
const landscape2 = {
    location : [37.71222, -103.150404]
};

// const [lat,log] = landscape2.location;
const {location : [lat,log]} = landscape2; 

console.log(`위도 : ${lat} 경도 : ${log}`);

