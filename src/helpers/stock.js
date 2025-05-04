import salesCounter from "./sales.js";

function stockCounter(inventory) {
    let stock = 0;
    for (let i = 0; i < inventory.length; i++) {
        stock = inventory[i].originalStock + stock;
    }
    return stock;
}




export default stockCounter;
