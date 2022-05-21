//* HACK-7 
//remplazar el item 300 
//por tú alias
//[100,200,300,400,500,600,700]  result >  [100,200,foo,400,500,600,700]

let arr1 = [100,200,300,400,500,600,700]
let i = "2"
arr1[i]= "Charlie"
console.log(arr1);