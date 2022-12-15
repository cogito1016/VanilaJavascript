function getTaxInformation(){
    return 12;
}

function formatPrice(user, {price, location}){
    const rate =  getTaxInformation(location);
    const taxes = rate? `추가세금 $${price*rate}` : '추가세금';

    return `${user}님의 합계금액 : $${price} 및 ${taxes}`;
}

export { formatPrice };