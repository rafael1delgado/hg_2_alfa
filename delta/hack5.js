// * HACK-5 
//clonar array
// [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700]

var array = [100,200,300,400,500,600,700]

console.log(`array original ${array}`)

function cloneArray(){
    var array1 = [...array]
    console.log(`array clonado ${array1}`)
}
cloneArray()