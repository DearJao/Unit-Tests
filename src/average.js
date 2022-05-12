/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. tobecloseto

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
 let total = 0;
 let averageNumbers = 0;

  if (array.length === 0) {
    return undefined;
  }
    
  for (let reader = 0; reader < array.length; reader += 1) {
    if (typeof array[reader] !== 'number') {
      return undefined;
    }
  
    total += array[reader];
    averageNumbers = total / (array.length);
  }
  
  return Math.round(averageNumbers);
};  

module.exports = average;
