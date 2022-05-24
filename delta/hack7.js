// * HACK-7 
//remplazar el item 300 
//por tú alias
// [100,200,300,400,500,600,700]  result >  [100,200,foo,400,500,600,700]


var array = [100,200,300,400,500,600,700]

console.log(`en el arreglo original ${array}`)

function replaceItem(){
    var newItem = 'gaby'
    array.splice(2, 1, newItem)
    console.log(`el nuevo item del array es ${newItem} y el arreglo quedo ${array}`)
}
replaceItem()