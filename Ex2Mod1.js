//Crie uma função que dado um intervalo (entre x e y) exiba todos os número pares:
//pares(32, 321);

function pares(x, y) {
    let i = x;
    while (i <= y) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i = i + 1; 
    }
}

pares(32,321);