const librarians =[
    {name:"kim",libraries:['a','b','c']},
    {name:"lee",libraries:['d','e','f']},
    {name:"paek",libraries:['g','h','i']}
];

//도서관 <-> 사서는 N:1관계
//e 라이브러리에 근무중인사람을 찾을 때

// let result;
// for(let i=0; i<librarians.length; i++){
//     const librarian = librarians[i];

//     if(librarian.libraries.includes('e')){
//         result = librarian;
//         break;
//     }
// }
// console.log(result);

const result = librarians.find((element)=>element.libraries.includes('e'));
console.log(result);