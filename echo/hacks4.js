/* HACK-4
     //eliminar los items 300 y 500
     [100,200,300,400,500,600,700]  result >  [100,200,400,600,700]*/

let ar = [100,200,300,400,500,600,700]

ar.splice(2, 1)
ar.splice(3, 1)

console.log(ar)