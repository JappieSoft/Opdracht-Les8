import salesCounter from "./sales.js";
import stockCounter from "./stock.js";

function purchasedCounter(inventory) {
    let purchased = 0;
    purchased = stockCounter(inventory) - salesCounter(inventory);

    return purchased;
}

export default purchasedCounter;