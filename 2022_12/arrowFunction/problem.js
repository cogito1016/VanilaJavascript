const name = {
    first: "jaehyeong",
    last: "kim"
};

// function getName({first, last}){
//     return `${first} ${last}`;
// }

getName = ({first, last}) => {
    return `${first} ${last}`;
}

console.log(getName(name));