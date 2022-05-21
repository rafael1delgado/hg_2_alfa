// * HACK-4
     //eliminar los items 300 y 500
//      [100,200,300,400,500,600,700]  result >  [100,200,400,600,700]

var array = [100,200,300,400,500,600,700]

console.log(`arreglo original ${array}`)

function deleteItems(){
    array.splice(2,1)
    array.splice(4,1)
    console.log(`array con los items eliminados ${array}`)
}
deleteItems()