// * HACK-3
//eliminar el último item
// [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600]

var array =  [100,200,300,400,500,600,700]

console.log(`arreglo original ${array}`)

function deleteLastItem(){
    array.pop()
    console.log(`arreglo con el ultimo item eliminado ${array}`)
}

deleteLastItem()