const users=[{userId:1,username:"Tom",attributes:["Nice","Cute"]},{userId:2,username:"Mike",attributes:["Lovely"]},{userId:3,username:"Nico",attributes:["Nice","Cool"]},];const rta=users.map((user)=>user.attributes).flat();const rta2=users.flatMap((user)=>user.attributes);console.log("map-flat",rta);console.log("rta2",rta2);const calendars={primaryCalendar:[{startDate:new Date(2021,1,1,15),endDate:new Date(2021,1,1,15,30),title:"Cita 1",},{startDate:new Date(2021,1,1,17),endDate:new Date(2021,1,1,18),title:"Cita 2",},],secondaryCalendar:[{startDate:new Date(2021,1,1,12),endDate:new Date(2021,1,1,12,30),title:"Cita 2",},{startDate:new Date(2021,1,1,9),endDate:new Date(2021,1,1,10),title:"Cita 4",},],};const rta3=Object.values(calendars).flatMap(item=>{return item.map(date=>date.startDate);});console.log(rta3);

//Reto
// En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([
//   "Beautiful is better than ugly",
//   "Explicit is better than implicit",
//   "Simple is better than complex",
//   "Complex is better than complicated",
// ]);

// Output

// 20
function solution(lines) {
    return lines.flatMap(item =>item.split(' ')).length
}; 