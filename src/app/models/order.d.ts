//In real-world application order entity must have more properties like (order items, price for each item etc.)
interface Order {
    customer: Customer,
    totalAmount: number
}