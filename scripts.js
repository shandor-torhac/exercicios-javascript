let idade = 17;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

console.log(idade);

let numero = -5;

if (numero > 0) {
  console.log("Numero positivo");
} else {
  console.log("Numero negativo");
}

let saldo = 500;
let saque = 200;

if (saque <= saldo) {
  console.log("Saque efetuado com sucesso");
  saldo = saldo - saque;
} else {
  console.log("Saldo insuficiente");
}

console.log(saldo);
