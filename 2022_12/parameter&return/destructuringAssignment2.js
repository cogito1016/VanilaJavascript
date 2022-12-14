//객체
const person = {
    name : 'jaehyeong',
    age : 11,
    location : 'seoul'
}

//객체 특정 키 제거 함수
function getPersonExceptLocation({location, ...details}){
    return {
        ...details
    }
}

//결과
console.log(getPersonExceptLocation(person));