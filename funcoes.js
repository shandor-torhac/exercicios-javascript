function calcularArea(R) {
  let resultado = 3.14159 * R * R;
  return resultado;
}

console.log(calcularArea(2));

function saudacao(nome) {
  return "Olá, " + nome + "! Seja bem vindo ao mundo dev.";
}

console.log(saudacao("Shandor"));

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else if (idade > 13 && idade < 18) {
    return "Adolescente";
  } else {
    return "Criança";
  }
}

console.log(verificarIdade(30));
console.log(verificarIdade(16));
console.log(verificarIdade(7));
