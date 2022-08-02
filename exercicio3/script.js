const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//Cria cópia do obj acima e trocando propriedade:

const copiaPokemon2 = {...pokemon1};
copiaPokemon2.nome = 'Squirtle'
copiaPokemon2.tipo = 'Água'

//alterando original, add nova propriedade com um array dentro com uma descrição dentro.

pokemon1.ataque = []

const investida = {
    nomeDoAtaque: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
};

pokemon1.ataque.push(investida);

//add propriedade ataque a partir de seu espalhamento

const copiaAtaque = {...ataque = [investida]};
copiaPokemon2.copiaAtaque =[investida];

const folhaNavalha = {
    nomeDoAtaque: 'Folha NATÁLIA',
    dano: 45,
    tipo: 'Grana',
    precisao: 100
};

pokemon1.ataque.push(folhaNavalha);

const copiaJatodaagua = {...folhaNavalha};
copiaPokemon2.copiaAtaque.push(copiaJatodaagua);
copiaJatodaagua.nomeDoAtaque = 'Jato da Áqua';
copiaJatodaagua.dano = 40;
copiaJatodaagua.tipo = 'Água';

console.log(pokemon1);
console.log(copiaPokemon2);