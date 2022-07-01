const elements=["Fire","Air","Water"];
let rtaFinal='';
const separator='--';
for(let index=0;index<elements.length;index++){
    const element=elements[index];
    rtaFinal=rtaFinal+element+separator;
}
const rta=elements.join('--');
console.log('for',rtaFinal);
console.log('join',rta);

const title='Curso de manipulación de arrays';
const urlFinal=title.split(' ').join('-').toLowerCase();
console.log(urlFinal);

//Reto
// En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), por ejemplo: Curso de arrays => curso-de-arrays

// La solución debería tener un input y output como los siguientes:

// solution("La forma de correr Python");
// solution("La API para nunca parar de aprender");
// solution("Curso de arrays");

// Output

// "la-forma-de-correr-python"
// "la-api-para-nunca-parar-de-aprender"
// "curso-de-arrays"

function solution(title) {
    // Tu código aquí 👈 
    return title.split(' ').join('-').toLowerCase();
}; 