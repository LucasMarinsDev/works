console.log(`Cia de Viagens`);

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro',

);

console.log("Todos os Destinos:");
console.log(listaDeDestinos);

console.log("Idade: 15");
const idadeComprador = 15;

const estaAcompanhada = false; //Variável de Tipo boolean
const comprouPassagem = true;

// if (idadeComprador >= 18) {
//     console.log("<Cliente Maior de Idade!!>")
//     console.log("Destinos Possíveis:");
//     listaDeDestinos.splice(1, 1); //removendo um item
//     console.log(listaDeDestinos);
// } else if (estaAcompanhada) {
//     console.log("Comprar com Acompanhante Resposável...");
//     listaDeDestinos.splice(1, 1);
//     console.log(listaDeDestinos);
// } else {
//     console.log("ERRO: Cliente menor de idade -- consulta de pacotes indisponível");
// }



if (idadeComprador >= 18  || estaAcompanhada == true) {
    console.log("Destinos Possíveis:");
    listaDeDestinos.splice(0, 1); //removendo um item
    console.log(listaDeDestinos);
} else {
    console.log("ERRO: Cliente menor de idade -- consulta de pacotes indisponível");
}

console.log("Embarque: \n");
if (idadeComprador >=18 && comprouPassagem == true){
    console.log("Aê! Compra efetuada com sucesso!")
    console.log("Boa Viagem!!");   
}else{
    console.log("ERRO: cliente menor de idade desacompanhado ou falha na compra...");
}
