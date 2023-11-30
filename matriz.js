const matriz = [0,1,0,1,1,0,0,1,0,0]
let total = 0
for(i = 0; i < matriz.length ;i++) {
  const expoente = matriz.length - 1 - i
  const decimal = matriz[i] * 2**expoente
  
  total = decimal + total
}

let sequenciaAtual = 0
let MaiorSequencia = 0
for (i=0 ; i < matriz.length; i++) {
  if(matriz[i] == 1) {
    sequenciaAtual = sequenciaAtual + 1

    if(sequenciaAtual > MaiorSequencia) {
      MaiorSequencia = sequenciaAtual
    }
  }
  else {
    sequenciaAtual = 0
  }
}

console.log(MaiorSequencia)