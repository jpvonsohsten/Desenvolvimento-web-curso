const [a] = [10]
console.log(a);

const [n1, ,n3, ,n5, ,n7 = 0] = [10, 7 ,9 , 8] // desestruturando o array
console.log(n1, n3, n5, n7);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota);