//* HACK-10 
//agregar después del item 500
//los alias qux y thud
//[100,200,300,400,500,600,700]  result >  [100,200,300,400,500,qux,thud,600,700]

let arr1 = [100,200,300,400,500,600,700]
arr1.splice(5, 0, 'qux','thud');

console.log(arr1);