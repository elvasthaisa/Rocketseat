//Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade 
//"Javascript" e retorna um booleano true/false caso exista ou não.

const skills = ['ReactJS', 'JavaScript', 'React Native'];

function temHabilidade(habilidades) {
    if (habilidades.indexOf('JavaScript') !== -1) {
        return true;
    } 
    else {
        return false;
    }
};

console.log(temHabilidade(skills));
