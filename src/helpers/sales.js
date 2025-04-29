function salesCounter(inventory) {
    let sales = 0;
    for (let i = 0; i < inventory.length; i++) {
        sales = inventory[i].sold + sales;
    }
    return sales;
}

export default salesCounter;
