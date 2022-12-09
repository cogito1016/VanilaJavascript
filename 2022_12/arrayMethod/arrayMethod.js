const prices = ['1.0', '2.15'];

// const formattedPrices = [];
// for(let i=0; i<prices.length; i++){
//     formattedPrices.push(parseFloat(prices[i]));
// }
// )
// for(let i=0; i<prices.length; i++){
//     console.log(`${formattedPrices[i]}의 타입은 ${typeof(formattedPrices[i])}`);
// }

const formattedPrices = prices.map((element)=>parseFloat(element));

formattedPrices.forEach((element)=>console.log(`${element}의 타입은 ${typeof(element)} ㅎㅎ`));
