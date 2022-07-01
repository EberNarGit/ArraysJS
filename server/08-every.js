const numbers=[1,30,39,29,10,13];
let rta=true;
//con for
for(let index=0;index<numbers.length;index++){
    const element=numbers[index];
    if(element>=40){
        rta=false
    }}   
console.log('for',rta);
//con every 
const rta2=numbers.every(item=>item<=40)
console.log('rta2',rta2);
//Desafio comprobar que todos tengan menos de 15 años
const team=[
    {name:"Nicolas",age:12,},
    {name:"Andrea",age:8,},
    {name:"Zulema",age:2,},
    {name:"Santiago",age:18,},
];
const rta3 = team.every(item => item.age < 15);
console.log('rta3', rta3);

//Reto si todos son pares
function solution(numbers) {
   return numbers.every(item => item % 2 === 0);
}; 