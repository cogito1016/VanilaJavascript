
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

// function byField(props){
//     if(props=='name'){
//         return function(a,b){
//             return a.name > b.name ? 1:-1;
//         }
//     }else if(props=='age'){
//         return function(a,b){
//             return a.age > b.age ? 1:-1;
//     }
// }//byField 내방법

function byField(prop){
    return function(a,b){
        return a[prop]>b[prop]? 1:-1;
    };//end
}//byField end


users.sort(byField('name'));
console.log(users);

users.sort(byField('age'));
console.log(users);