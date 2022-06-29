const works = [
    {title: 'Design logo', status: 'Complete'},
    {title: 'Develop head', status: 'Incomplete'},
    {title: 'Develop Main', status: 'Complete'},
    {title: 'Develop Footer', status: 'Incomplete'},
];

const app = document.getElementById('app');
works.forEach(work => {
    app.innerHTML += `<li >${work.title} - ${work.status} <input type="checkbox"> </li>`;
});