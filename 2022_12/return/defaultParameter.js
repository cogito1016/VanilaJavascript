// function convertWeight(weight, ounces, roundTo){
//     const oz = ounces ? ounces / 16 : 0; //요런식의 default값을 지정하게된다
//     const total = weight + oz;
//     const conversion = total / 2.2;
//     const round = roundTo === undefined ? 2:roundTo;
//     return roundToDecimalPlace(conversion, round);
// }

function convertWeight(weight, ounces=0, roundTo=2){
    const total = weight + (ounces/16)
    const conversion = total / 2.2;
    return roundToDecimalPlace(conversion, roundTo);
}
