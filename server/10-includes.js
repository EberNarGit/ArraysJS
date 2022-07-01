const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog')
console.log('for', includeInArray);
console.log('includes', rta);

//desafio
function solution(words, query) {
	return words.filter(item => item.includes(query))
};

//Reto
// En este desafío vas a tener un string y debes buscar si ese string tiene un término de búsqueda, por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, así la el término de búsqueda sea mayúscula o minúscula.
// La solución debería tener un input y output como los siguientes:
// solution("Ana lava la tina", "ana");
// solution("Santiago", "tiago");
// solution("Nicolas", "ana");
// Output
// true
// true
// false
function solution(word, query){
    return word.toLowerCase()
    .includes(query.toLowerCase());
}; 

//Reto 2
// Tu desafío es crear un buscador usando funciones como filter y includes, vas a tener array con palabras e tienes que retornar un array con sola las que cumplan con la condición de tener el parámetro de búsqueda.
// La solución debería tener un input y output como los siguientes:
// solution(["ana", "santi", "nico", "anastasia"], "an");
// solution(["ana", "santi", "nico", "anastasia"], "xyz");
// Output
// ["ana", "santi", "anastasia"]
// []