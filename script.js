function link(event) {
    let link = event.target.value; 
    alert(link.charAt(0));
}

let Mark = {
    firstName: "Mark",
    lastName: "Zuckerberg",
    age: 34,
    company: "Facebook"
}
let Larry = {
    firstName: "Larry",
    lastName: "Page",
    age: 45,
    company: "Google"
}
let Timothy = {
    firstName: "Timothy",
    lastName: "Cook",
    age: 57,
    company: "Apple"
}
let Bill = {
    firstName: "Bill",
    lastName: "Gates",
    age: 62,
    company: "Microsoft"
}
let obj = [Mark, Larry, Timothy, Bill];
function link() {
    window.location.href = 'https://mystat.itstep.org';
}

function showTable() {
    let table = document.querySelector('table');
    table.innerHTML = '';
    table.innerHTML =  '<tr><td onclick="sortByFirstName()">Firstname</td><td onclick="sortByLastName()">Lastname</td><td onclick="sortByAge()">Age</td><td onclick="sortByCompany()">Company</td></tr>'
    for(let i = 0; i < obj.length; i++) {
        table.innerHTML += '<tr><td>' + obj[i].firstName + '</td><td>' + obj[i].lastName + '</td><td>' + obj[i].age + '</td><td>' + obj[i].company + '</td></tr>'
    }
}

function sortByFirstName() {
    obj.sort((a, b) => a.firstName > b.firstName ? 1: -1);
    showTable();
}

function sortByLastName() {
    obj.sort((a, b) => a.lastName > b.lastName ? 1: -1);
    showTable();
}

function sortByCompany() {
    obj.sort((a, b) => a.company > b.company ? 1: -1);
    showTable();
}

function compareNumbers(a, b) {
    return a.age - b.age;
}

function sortByAge() {
    obj.sort(compareNumbers);
    showTable();
}

showTable();