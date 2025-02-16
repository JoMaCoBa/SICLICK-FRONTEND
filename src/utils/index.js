/**
 * This function calculates the total price of all products in the cart
 * @param {Array} products cart products: array of objects
 * @returns {number} sum of all prices of products
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach((product) => {
        sum += parseFloat(product.price);
    });
    return sum.toFixed(2);
}