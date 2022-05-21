// * HACK-9
//      agregar tú alias al inicio
//      [100,200,300,400,500,600,700]  result >  [foo,100,200,300,400,500,600,700]

var array = [100,200,300,400,500,600,700]

console.log(`original array ${array}`)

function addItem(){
    var alias = 'gaby'
    array.unshift(alias)
    console.log(`edited array ${array}`)
}
addItem()