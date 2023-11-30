const matriz = [1,0,0,0,0]
let total = 0
for(i = 0; i < matriz.length ;i++) {
  const expoente = matriz.length - 1 - i
  const decimal = matriz[i] * 2**expoente
  
  total = decimal + total
}

console.log(total)