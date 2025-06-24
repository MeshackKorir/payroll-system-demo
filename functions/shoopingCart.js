class ShoppingCart {
    calculateTotal(products) {
        let subtotal = 0;

        for (let product of products) {
            subtotal += product.price * product.quantity;
        }

        
        if (subtotal > 100) {
            subtotal *= 0.9; 
        }

        
        const total = subtotal * 1.08;
        return total.toFixed(2);
    }
}

const cart = new ShoppingCart();

const items = [
    { price: 30, quantity: 2 },  
    { price: 50, quantity: 1 }  
];

console.log("Total: $" + cart.calculateTotal(items));  // Output: Total: $106.92
