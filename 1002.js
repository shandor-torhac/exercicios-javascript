const entrada = ["2.00", "100.64", "150.00"];

function calcularArea(raioTexto) {
  const raio = parseFloat(raioTexto);
  const pi = 3.14159;

  const area = pi * Math.pow(raio, 2);

  const resultadoFormatado = area.toFixed(4);

  return "A=" + resultadoFormatado;
}

console.log("--- TESTANDO CÁLCULOS DA ÁREA ---");

entrada.forEach((entrada, indice) => {
  const resultado = calcularArea(entrada);
  console.log(`Teste ${indice + 1} | Raio: ${entrada} => Saída: ${resultado}`);
});
