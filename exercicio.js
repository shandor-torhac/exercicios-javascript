// Situação 1: saque menor que saldo → deve aprovar

saque = 500;
saldo = 800;

if (saque < saldo) {
  saldo = saldo - saque;
  console.log("Saque efetuado com sucesso");
} else {
  console.log("Saldo insuficiente");
}

console.log(saldo);

// Situação 2: saque maior que saldo → deve negar

saque = 700;
saldo = 300;

if (saque > saldo) {
  console.log("Saldo insuficiente");
}

console.log("Saque negado! Saldo mantido: " + saldo);

// Situação 3: saque igual ao saldo → deve aprovar e zerar

saque = 200;
saldo = 200;

if (saque === saldo) {
  saldo = saldo - saque;
}

console.log("Saque aprovado, saldo: " + saldo);
