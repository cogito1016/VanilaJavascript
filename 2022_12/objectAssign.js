//Object.Assign

//제시된 문제
let defaultBook = {
    title: '',
    author: '',
    price: 1000,
    year: 2020
}

let book = {
    title: 'jayden',
    author: '김경식'
}

//해결방법
console.log({...defaultBook, ...book});

//Object.assign은 필요없지않은가?
//펼침연산자로 해결 가능