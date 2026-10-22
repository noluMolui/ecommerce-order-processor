//CHALLENGE 0: Initial Order Dataset
let rawOrders = [
    { orderId: "ORD-0001", customerName: "  alice smith ", email: "ALICE.SMITH@GMAIL.COM", product: "Wireless Mouse", category: "Electronics", price: "450.50", orderDate: "2026-09-15" },
    { orderId: "ORD-0002", customerName: "bob jones", email: "bob.jones@yahoo", product: "Mechanical Keyboard", category: "Electronics", price: "1250.99", orderDate: "2026-10-02" },
    { orderId: "ORD-0003", customerName: "CHARLIE BROWN", email: "charlie@outlook.com", product: "Standing Desk", category: "Furniture", price: "3499.00", orderDate: "2026-08-20" },
    { orderId: "ORD-0004", customerName: "diana prince ", email: "diana.prince@amazon.org", product: "Yoga Mat", category: "Fitness", price: "299.99", orderDate: "2026-10-18" },
    { orderId: "ORD-0005", customerName: "  ethan hunt", email: "ethan@imf.net", product: "Running Shoes", category: "Footwear", price: "1599.5", orderDate: "2026-09-30" },
    { orderId: "ORD-0006", customerName: "fiona gellagher", email: "fiona.gellaghergmail.com", product: "Coffee Maker", category: "Appliances", price: "899.00", orderDate: "2026-07-10" },
    { orderId: "ORD-0007", customerName: "george clooney", email: "george@nespresso.com", product: "Coffee Beans", category: "Groceries", price: "185.25", orderDate: "2026-10-20" },
    { orderId: "ORD-0008", customerName: "hannah montana", email: "hannah@disney.com", product: "Guitar Stand", category: "Music", price: "450.00", orderDate: "2026-06-12" },
    { orderId: "ORD-0009", customerName: " ian Malcolm", email: "ian@jurassic.org", product: "Desk Lamp", category: "Furniture", price: "320.00", orderDate: "2026-09-01" },
    { orderId: "ORD-0010", customerName: "julia roberts", email: "julia@hollywood.com", product: "Water Bottle", category: "Fitness", price: "150.00", orderDate: "2026-10-21" }
];

console.log("Initial raw dataset loaded. Total items:", rawOrders.length);

// CHALLENGE 1: Clean Customer Data
function cleanStringData(myArray) {
    let cleanedList = [];
    
    // Using a for loop to process each record step-by-step
    for (let i = 0; i < myArray.length; i++) {
        let item = myArray[i];
        
        // Remove extra spaces from names and emails
        let trimmedName = item.customerName.trim();
        let trimmedEmail = item.email.trim();
        
        // Convert emails to lowercase
        let lowerEmail = trimmedEmail.toLowerCase();
        
        // Capitalize the first letter of each name word
        let nameParts = trimmedName.split(" ");
        let fixedParts = [];
        for (let j = 0; j < nameParts.length; j++) {
            let word = nameParts[j];
            if (word.length > 0) {
                let formattedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                fixedParts.push(formattedWord);
            }
        }
        let cleanName = fixedParts.join(" ");

        let newObj = {
            orderId: item.orderId,
            customerName: cleanName,
            email: lowerEmail,
            product: item.product,
            category: item.category,
            price: item.price,
            orderDate: item.orderDate
        };
        
        cleanedList.push(newObj);
    }
    
    return cleanedList;
}
