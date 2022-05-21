//* HACK-1 
//vaciar el array
// [100,200,300,400,500,600,700]  result >  []  

var array = [100,200,300,400,500,600,700]

console.log(`Arreglo lleno ${array}`)

function vaciarArreglo(){
    array.length = 0
}

// vaciarArreglo()

var array1 = []

function vaciarArreglo1(){
    array = array1
}
vaciarArreglo1()
console.log(`Arreglo vacio ${array}`)
