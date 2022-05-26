// * HACK-8 
//agregar tú alias al final
// [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700,foo]

var array = [100,200,300,400,500,600,700]
console.log(`array original ${array}`)

function addItem(){
    var newItem = 'gaby'
    array.push(newItem)
    console.log(`el arreglo quedo asi ${array}`)
}
addItem()