const firms = {
    10:'iron man',
    20:'elsa',
    30:'anna'
};

for(const id in firms){
    const value = firms[id];
    console.log(`${id} = ${value}`);
}
