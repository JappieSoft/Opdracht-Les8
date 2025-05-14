import {inventory} from "../constants/inventory.js";

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
    for (let i = 0; i < inputArray.availableSizes.length; i++) {
        sizeConversion = Math.trunc(inputArray.availableSizes[i] * 2.54);
        calcString = `${inputArray.availableSizes[i]} inch (${sizeConversion} cm)`;
        calcArray.push(calcString);
    }
    return calcArray.join(` | `);
}

export function tvOptions(inputArray) {
    let optionString;
    let optionArray = [];
    const optionNames = inputArray.options.map((optionName) => { return optionName.name; });
    console.log(optionNames);

    const optionIcons = inputArray.options.map((optionIcon) => { return optionIcon.applicable ; });
    console.log(optionIcons);

    for (let i = 0; i < optionNames.length; i++) {
        optionString = `${optionNames[i]}`;
        optionArray.push(optionString);
    }
    return optionArray.join(" ");

    console.log(optionArray);
}

export default tvName;