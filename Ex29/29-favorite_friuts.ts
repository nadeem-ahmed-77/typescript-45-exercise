// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!




let favoriteFriuts : string[] = [ 'Mango', 'Apple', 'Banana'];


if(favoriteFriuts.includes('Apple')){
    console.log("I really like Apple");
}
if(favoriteFriuts.includes('Mango')){
    console.log("I really like Mango");
}
if(favoriteFriuts.includes('Banana')){
    console.log("I really like Banana");
}
if(favoriteFriuts.includes('Orange')){
    console.log("I really like Orange");
}
if(favoriteFriuts.includes('Strawberry')){
    console.log("I really like Strawberry");
}
