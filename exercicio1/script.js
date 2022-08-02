//Pt0: criando const vazia
const sacolao = [];

//Pt1: Criando objs

const maca = {
    nome: 'Maçâ',
    preco: 0.20,
    disponibilidade: true
}

const banana = {
    nome: 'Banana',
    preco: 0.15,
    disponibilidade: true
}

const pera = {
    nome: 'Pera',
    preco: 0.25,
    disponibilidade: true
};

//Pt 2 e 3: Adcionando os objs ao array e imprimindo no console

sacolao.push(maca, banana, pera);
console.log(sacolao);
