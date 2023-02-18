const meuArray1 = [77, 55, 98, 305, 2023]
const meuArray2 = ['livro', 'gato', 'caneta', 'borracha']
const meuArray3 = [85, 25, 'Belchior', 'Brianna', false, true]

const meuArray1Copia = meuArray1.slice()

const meuArray2Copia = meuArray2.slice()

const meuArray3Copia = meuArray3.slice()

//a)

meuArray1Copia.unshift(12)
console.log(meuArray1Copia)

//b)

meuArray2Copia.pop()
console.log(meuArray2Copia)

//c)

meuArray3Copia.splice(2, 1)
console.log(meuArray3Copia)