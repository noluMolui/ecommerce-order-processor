# E-Commerce Order Processor

## Project Description
A client-side JavaScript web application that processes, cleans, filters, and reports on e-commerce customer order data. The application uses HTML, strict Tailwind CSS utility classes, and vanilla JavaScript built-in objects to format customer names, perform price calculations, parse dates, filter orders, and validate data formats.

## Technologies
* HTML5
* Tailwind CSS (v4 CDN)
* JavaScript (ES6)

## Built-In Objects Used

| Built-In Object | Where / How Used in Project |
| :--- | :--- |
| **String** | Cleaning extra spaces (`trim()`), converting emails to lowercase (`toLowerCase()`), splitting names (`split()`), and capitalizing word first letters (`charAt()`, `slice()`). |
| **Number & Math** | Formatting prices to two decimal places (`toFixed()`), parsing numbers (`parseFloat()`), and computing max and min order prices (`Math.max()`, `Math.min()`). |
| **Date** | Creating date objects (`new Date()`), formatting readable date strings (`toLocaleDateString()`), and calculating elapsed days ago (`getTime()` / difference math). |
| **Array** | Iterating datasets, filtering orders based on user input, and sorting order lists by date (`sort()`, `push()`). |
| **Set** | Collecting unique categories from order objects and converting them back into array badges for filtering. |
| **Map** | Creating a key-value lookup table for product details (`set()`, `get()`, `has()`) to fetch price and category by product name. |
| **JSON** | Converting raw order array data into text (`JSON.stringify()`) and parsing pasted JSON text back into JavaScript objects (`JSON.parse()`). |
| **RegExp** | Testing whether customer email addresses follow valid regex patterns (`test()`). |

## How to Run
1. Clone or download this project repository.
2. Open `index.html` in any web browser (Google Chrome, Firefox, Microsoft Edge, Safari).
3. Interact with the search bars, filters, product lookup, and export/import tools directly on screen.

## Screenshots
*(Add screenshots of your working browser interface here before submitting)*

## Reflection

1. **Which built-in JavaScript object did you find most useful?**
   I found the `String` object methods most useful because real-world data entered by users is usually full of unnecessary spaces and inconsistent capital letters, so `trim()` and `split()` made it easy to clean.

2. **Which challenge was the most difficult?**
   Challenge 3 with `Date` calculations was the trickiest for me because calculating the number of days ago required converting date differences into milliseconds first before dividing by days.

3. **What did you learn about choosing the right JavaScript method for a problem?**
   I learned that using built-in features like `Set` for unique values or `Map` for product lookups saves a lot of time compared to writing long manual nested loops.

4. **If you had more time, what would you improve about the application?**
   If I had more time, I would like to add a form so users can type and submit a brand new order directly into the list from the user interface.
