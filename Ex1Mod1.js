//Exercício 1
//Crie uma função que dado o objeto retorne o seguinte conteúdo: 
//O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.

var enderecoMaria = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

function mostrarEndereco (endereco) {
    return ("O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", " + 
    "na rua " + endereco.rua + " com nº " + endereco.numero + ".");
}

const resultado = mostrarEndereco(enderecoMaria);
console.log(resultado);