/* HACK-8 
//agregar tú alias al final
[100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700,foo]*/

let ar = [100,200,300,400,500,600,700]

ar.splice(7,0, "Echo")

console.log(ar)