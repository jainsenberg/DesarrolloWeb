const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,0]

console.log(array1)


// [.concat()] para unir 2 o mas arreglos, la ventaja de esto es que no modifica ningun array sino que crea uno nuevo
const array3 = array1.concat(array2)
console.log(array3)

//Constructor se utiliza para crear objetos Array y definir su tamaño. De esto hay diferentes formas para definir un nuevo arreglo
const array4 = new Array(2);
console.log(array4.length)

// [.copyWithin()] sirve para copiar uno o mas elementos en otra posición (es raro)
const array5 = ['a', 'b', 'c', 'd', 'e']

console.log(array5.copyWithin(0, 2, 3))

console.log(array5.copyWithin(0, 2))

//[.lenght] para saber el tamaño del arreglo
console.log(array1.length)

// [.at()] para conocer cual es el elemento que se encuentra en la posición que se le indica
var index
index=2
console.log(array1.at(index))

// [.entries()] se usa la función para retornar un nuevo arrat iterator que contiene un key value 

const arrayE = ['gato', 'perrito', 'aguilucho', 'hamster', 'patoo']

const iterador = arrayE.entries()

console.log(iterador.next().value)

// [.every()] se usa la función para poner a prueba todos los elementos del array a uan condición de su preferencia

const menor = (CurrentValue) => CurrentValue < 13

const arrayEv = [1, 5, 4, 10, 12]

console.log(arrayEv.every(menor))

// [.fill()] se usa la función para cambiar todos los elementos de un array a un valor estatico, de un inicio de la posición a un final 

const arrayF = [20, 66, 18, 15, 98, 12]

console.log(arrayF.fill(18,3,5))

// [.filter()]  se usa la función para crear una copia del array con una condición 

const arrayFilt = ['vaquita', 'toroo', 'morsa', 'jabali', 'delfin']

const filtrao = arrayFilt.filter(word => word.length > 4)

console.log(filtrao)

//[.find()] encontrar el primer elemento de un array cque coincida con el que se quiera

const arrayFind = [12, 24, 13, 17, 54, 63]

const soka =arrayFind.find(Element => Element > 13)

console.log(soka)

// [.findIndex()] se usa la función para encontrar la posición del primer elemento que coincida con el que se quiera

const arrayFIndex = [12, 13, 1]

const jummmm = (Element) => Element > 13

console.log(arrayFIndex.findIndex(jummmm))

// [.findLast()]  se usa la función para encontrar el ultimo elemento de un array que coincida con el que se quiera

const arrayFLast = ['pochita', 'isagi', 'thorfinn', 'isuku']

const onta = arrayFLast.findLast(word => word.length <5)

console.log(onta)

// [.findLastIndex()]  se usa la función para encontrar la posición del ultimo elemento que coincida con el que se quiera

const arrayFindLastIndex = ['pochita', 'isagi', 'thorfinn', 'isuku']

const aaaayaaa = word => word.length <4

console.log(arrayFindLastIndex.findLastIndex(aaaayaaa))

//[.flat()]  se usa la función para crear un nuevo array con todos los elemnetos de una array dentro de un array concatenado, además se puede modificar que tan profundo concatena los subarray

const arrayFlat = ['bad', 'caifanes', 'minami',['fredy', 'calamaro']]

console.log(arrayFlat.flat(1))

//[.flatMap()] que todos los elementos de un array se les asigne una función y concatenen lo elementos de un array dentro de un array, básicamente el funcionamiento de map y flat 

const arrayFlatM = [12, 15, [22], [45, 3], 34, []]

const yaNoseQmas = arrayFlatM.flatMap(num => num)

console.log(yaNoseQmas)

//[.forEach()] para que ejecute la función por cada uno de los elementos 

const arrayForEach = ['morgana', 'karma', 'seraphine','neeko']

arrayForEach.forEach(word => console.log(word))

//[.includes()] determinar si el array incluye un valor determinado, este devolverá un boolean( True o False)

const arrayHamburguesas = ['losPaisas', 'Butcher', 'LaDeMiCasa', 'LaDelBarrio']

console.log(arrayHamburguesas.includes('leños'))

console.log(arrayHamburguesas.includes('otra'))

//[.indexOf()] para encontrar la PRIMERA posición de un elemento que cumpla una condición , si no existe un elemento con la concición retornará un -1

const arrayCarros = ['tomas', 'tesdla', 'toyota', 'renault', 'tesdla']

console.log(arrayCarros.indexOf('tesdla'))

console.log(arrayCarros.indexOf('tesdla', 2))

console.log(arrayCarros.indexOf('swift'))

//[.join()] para devolver un string de todos los elementos en un array, estos pueden estar separados por comas o guinoes

const arrayMouse =['redragom', 'logitech', 'razer']

console.log(arrayMouse.join())

//[.keys()] para crear un iterator para cada una de las posiciones del array 

const arrayKey = ['a', 'b', 'c']
const Separador = arrayKey.keys()

for (const key of Separador) {
  console.log(key);
}

//[.lastIndexOf()] para encontrar la La ultimiya posición de un elemento que cumpla una condición , si no existe un elemento con la concición retornará un -1

console.log(arrayCarros.lastIndexOf('tesdla'))

// [.map()] para que todos los elementos de un array sean sometidos a una función
const noseee = array1.map(array1 => array1 * 2); 

console.log(noseee)

//[.pop()] para remover el último elemento de un array, esto modificará el tamaño del array 

const tengosuenito =['oveja1', 'oveja2','oveja3','oveja4']
console.log(tengosuenito.pop())
console.log(tengosuenito)

//[.push()] para agregar un elemento al final del array 

tengosuenito.push('oveja5', 'oveja6', 'oveja43')

console.log(tengosuenito)

//[.reduce()] pa reducir para Comprimir o sumar todos los elementos en un array lo cual devolvera un solor valor (también se pueden concatenar varias array, en ese caso nos dejará un array con los elementos de los array)  
const arrayRed =[1,3,5,6]  
const sumita = arrayRed.reduce((Sumatoria, ValorActual) => Sumatoria + ValorActual)  
console.log(sumita)  

//[.reduceRight()] pa comprimir o sumar todos los elementos de derecha a izquierda lo cual retornará un úncio valor (también se pueden concatenar varias array, en ese caso nos dejará un array con los elementos de los array)  
const array912321 = [[0, 1], [2, 3], [4, 5]];  
const answeeeer = array912321.reduceRight((Sumatoria, ValorActual) => Sumatoria.concat(ValorActual));  
console.log(answeeeer);  

//[.reverse()] pa cambia el orden de los elementos en un array  
const array13 = ['AVICHUELA', 'PEREJIL','JENGIBRE']  
console.log(array13.reverse())

//[.some()] para probar si al menos uno de los elementos cumple una condición, en este caso soltará un boolean (True ó False)

const arraySome =[4,5,2,14]

const afueeeera = (Element) => Element > 2

console.log(arraySome.some(afueeeera))

// [.sort()] para ordenar los elementos del array
const cereal = ['1cereal', '2cuchara', '3leche']
console.log(cereal.sort())

// [.splice()] para sustituir los elementos de un arreglo por otros
const monsterinc = ['suli', 'mike', 'lu', 'aaaaa'];
monsterinc.splice('solivan', 'dame a', 'la niña'); 
console.log(monsterinc);

// [.toLocaleString()] creo que es para la fecha o una cadena de texto separadas por comas idk 
const otroArray = [1, 'a', new Date('30 Ene 2023 14:12:00 UTC')];
const localeString = otroArray.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);

// [.toString()] para mostrar o devolver una cadena de caracteres con todos lo elementos en el array
const yaCasiAcabo = ['julio', 'federico', 'andres', 'juanita'];

console.log(yaCasiAcabo.toString());

// [.unshift()] para colocar elementos delante del array al que se le unshiftee
const arraysiuuu = [1, 2, 3];

console.log(arraysiuuu.unshift(7, 6));
console.log(arraysiuuu)

// [.values()] sirve para crear un nuevo array iterator que guarda los valores del arreglo anterior o algo asi 
const siuuuuuuuuu = ['d', 'j', 'q', 'o', 'b'];
const iterator = siuuuuuuuuu.values();

console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 
console.log(iterator.next().value); 

