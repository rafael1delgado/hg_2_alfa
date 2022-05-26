const log = console.log;

// EMPTY ARRAY
let array = [100,200,300,400,500,600,700];

// Method 1
array = [];

// Method 2
array.length = 0;

// Method 3
let aLen = array.length;
array.splice(0, aLen);

// Result
log(array);