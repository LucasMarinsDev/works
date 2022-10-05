console.log(`Cia de Viagens`);

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro',

);

console.log("\n Todos os Destinos:");
console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = false; //Variável de Tipo boolean
let comprouPassagem = false;
const destino = "Salvador";


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0;
destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!!");
}else{
    console.log("erro");
}

for (let cont = 0;contador<3; cont++ ) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}


