const totals = [1,2,3,4];

let sum = 0;
//Con for
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);
//Con reduce
const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);

//Desafio Tienes un array de números y debes retornar la suma de todos los valores en él.

function solution(numbers) {
    // Tu código aquí 👈
    return numbers.reduce((sum, element) => sum + element, 0); 
}; 

