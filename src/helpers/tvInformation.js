function tvName(inputArray) {
    let nameString = `${inputArray.brand} ${inputArray.type} - ${inputArray.name}`;
    return nameString;
}


export function tvPrice(inputArray) {
    let priceString = `€${inputArray.price},-`;
    return priceString;
}


export function tvImage(inputArray) {
    let imgString = `${inputArray.sourceImg}`;
    return imgString;
}


export function availableSizes(inputArray) {
    let sizeConversion;
    let calcString;
    let calcArray = [];
    for (let i = 1; i < inputArray.availableSizes.length; i++) {
        sizeConversion = Math.trunc(inputArray.availableSizes[i] * 2.54);
        calcString = `${inputArray.availableSizes[i]} inch (${sizeConversion} cm)`;
        calcArray.push(calcString);
    }
    return calcArray.join(` | `);
}


export default tvName;