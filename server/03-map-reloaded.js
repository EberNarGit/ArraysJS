const orders = [
    {
      customerName: "Nicolas",
      total: 1000,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

const rta = orders.map((item) =>
  {return {...item, tax:0.19,};
});
console.log("rta",rta);
console.log("original",orders);

function solution(array){
    return array.map((item) => (
        {...item, tax: Math.trunc(item.total * .19)}
    ))
}

console.log(solution(orders));