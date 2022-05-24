// * HACK-2
//eliminar el primer item
// [100,200,300,400,500,600,700]  result >  [200,300,400,500,600,700]  

var array = [100,200,300,400,500,600,700]

console.log(`arreglo original ${array}`)

function deleteFirstItem(){
    array.shift()
    console.log(`array con el primer item eliminado ${array}`)
}

deleteFirstItem()