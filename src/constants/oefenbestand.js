import { inventory }  from "./inventory.js";



function showOutcomeInConsole() {

    console.log('uitkomst opdracht 1a');
    const tvName = inventory.map((name) => { return `${name.brand} ${name.type} - ${name.name}`; });
    console.log(tvName);


    console.log('uitkomst opdracht 1b');
    const tvSoldOut = inventory.filter((sold) => { return sold ? sold.originalStock === sold.sold : `None available / Sold out at the moment`; });
    console.log(tvSoldOut);


    console.log('uitkomst opdracht 1c');
    const specificTV = inventory.find((thisTV) => { return thisTV.type === 'NH3216SMART'; });
    console.log(specificTV);


    console.log('uitkomst opdracht 1d');
    const tvSport = inventory.map((sport) => { return { name: sport.brand + " " + sport.name , suitable: (sport.refreshRate >= 100) } });
    console.log(tvSport);

    console.log('uitkomst opdracht 1e');
    const bigTV = inventory.filter((tvSize) => { return tvSize ? tvSize.availableSizes.some((size) => size >= 65)  : `None available at the moment`; });
    console.log(bigTV);

    console.log('uitkomst opdracht 1f');

    const ambiTV = inventory.filter(television => {
        const ambiOption = television.options.find(option => option.name === "ambiLight");
        return (ambiOption && ambiOption.applicable === true);
    });

    console.log(ambiTV);


    console.log('uitkomst opdracht sort');
    const sort =    inventory.sort((a, b) => b - a);
    console.log(sort);

}








export default showOutcomeInConsole;
