const log = console.log;

// ADD ALIAS qux && thud AFTER ITEM 500
let array = [100,200,300,400,500,600,700];

// Method
let aLen = array.length;
let idx = aLen;

for(; idx >= 0; idx--) {
    if(array[idx] >= 500){
        array[idx + 1] = array[idx];
        array[idx + 2] = array[idx + 1];
    }
}

array.find( (item, idx) => {
    if(item == 500 && array[idx + 1] == 500){
        array.splice(idx + 1, 1, "qux");
        array.splice(idx + 2, 1, "thud");
    }
});

// Result
log(array);