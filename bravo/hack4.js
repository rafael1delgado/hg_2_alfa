const log = console.log;

// DEL ITEMS 300 && 500
let array = [100,200,300,400,500,600,700];

// Method 1
//array.splice(2, 1); // when deleted idx change
//array.splice(3, 1);

// Method 2
// array.filter( (item, idx) => item == 300 || item == 500 ? array.splice(idx, 1) : item);

// Result
log(array);

// Notes
// array.filter( (item, idx) => item == 300 || item == 500 ? delete array[idx] : item); 
// returns <1 empty item> on each idx