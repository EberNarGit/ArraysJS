const products = [
    { title: 'Burger', price: 121 },
    { title: 'Pizza', price: 20 },
];
const app = document.getElementById('app');
const lis = products.map(product => {
    return `<li>${product.title} ${"++"} - ${product.price}</li>`;
})
app.innerHTML = lis.join('');


function solution(array) {
   return array.map(item => item * 2);
}; 
