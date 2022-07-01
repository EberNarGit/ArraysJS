const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const existe = users.some((user) => user.uid === 2);
console.log('Este valor es:', existe);

//Reto si hay numeros pares
function solution(numbers) {
    // Tu código aquí 👈 
   return numbers.some((number) => number % 2 === 0);
}; 

solution([1, 3, 5, 7, 10, 11]);