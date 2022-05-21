/*HACK-9
//agregar tú alias al inicio
[100,200,300,400,500,600,700]  result >  [foo,100,200,300,400,500,600,700]*/

let ar = [100,200,300,400,500,600,700]

ar.splice(0,0, "Echo")

console.log(ar)