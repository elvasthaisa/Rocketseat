//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade 
//"Javascript" e retorna um booleano true/false caso exista ou não.

const skills = ['JavaScript', 'ReactJS', 'React Native'];

function temHabilidade(habilidades) {
    if (skills.indexOf('JavaScript') === 0) {
        console.log('true');
    } 
    else {
        console.log('false');
    }
};

temHabilidade(skills);