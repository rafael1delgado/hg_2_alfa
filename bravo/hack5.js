const log = console.log;

// CLONE ARRAY
let array = [100,200,300,400,500,600,700];

// Method 1
let cloneArray = array.slice();

// Method 2
let arrayClone = [... array];

// Result
log(cloneArray);
log(arrayClone);