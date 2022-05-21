//* HACK-4
     //eliminar los items 300 y 500
     //[100,200,300,400,500,600,700]  result >  [100,200,400,600,700]

     
let arr1 = [100,200,300,400,500,600,700]
arr1.splice(2, 1);
arr1.splice(3, 1);
console.log(arr1);