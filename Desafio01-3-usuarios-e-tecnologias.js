//Crie um programa que armazena um array de usuários (Carlos, Jasmine e Tuane). 
//Cada usuário tem um nome e suas tecnologias (HTML, CSS; JavaScript, CSS; HTML, Node.js).

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela 
//as informações dos usuários:
//Carlos trabalha com HTML, CSS
//Jasmine trabalha com JavaScript, CSS
//Tuane trabalha com HTML, Node.js

const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
]

function encontrarNomeUsuarios(usuario) {
    for (let i = 0; i < usuario.length; i++){
        name = name + usuario[i].nome;
    }
    return name;
}


function encontrarTecnologiasUsuarios(usuario) {
    for (let i = 0; i < usuario.length; i++){
        tech = tech + usuario[i].tecnologias; 
    }
    return tech;
}

function imprimirUsuarios(usuario) {
    encontrarNomeUsuarios(usuario);
    encontrarTecnologiasUsuarios(usuario);
    console.log(`${name} trabalha com ${tech}`);
}

imprimirUsuarios(usuarios);