let vitorias = 300;
let derrotas = 3;
let saldoVitorias = calculaNivel (vitorias, derrotas);

function calculaNivel (vitorias, derrotas) {
    return vitorias - derrotas;
} 

if (saldoVitorias < 10) {
    console.log("O herói tem saldo de " + saldoVitorias + " e está no nível ferro");
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    console.log("O herói tem saldo de " + saldoVitorias + " e está no nível bronze");
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    console.log("O herói tem saldo de " + saldoVitorias + " e está no nível prata");
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    console.log("O herói tem saldo de " + saldoVitorias + " e está no nível ouro");
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    console.log("O herói tem saldo de " + saldoVitorias + " e está no nível diamente");
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    console.log("O herói tem saldo de " + saldoVitorias + " e está no nível lendário");
} else {
    console.log("O herói tem saldo de " + saldoVitorias + " e está no nível imortal");
} 


console.log(saldoVitorias);