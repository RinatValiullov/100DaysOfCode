let persons = [{
    "id": 1,
    "first_name": "Bobbie",
    "last_name": "Glowacki"
}, {
    "id": 2,
    "first_name": "Petey",
    "last_name": "Dailly"
}, {
    "id": 3,
    "first_name": "Horton",
    "last_name": "Callinan"
}, {
    "id": 4,
    "first_name": "Ezechiel",
    "last_name": "Snawden"
}, {
    "id": 5,
    "first_name": "Cosmo",
    "last_name": "Standing"
}, {
    "id": 6,
    "first_name": "Trude",
    "last_name": "Yitzhakof"
}, {
    "id": 7,
    "first_name": "Barr",
    "last_name": "Alkins"
}, {
    "id": 8,
    "first_name": "Yule",
    "last_name": "Treat"
}, {
    "id": 9,
    "first_name": "Morgan",
    "last_name": "Frarey"
}, {
    "id": 10,
    "first_name": "Cassandre",
    "last_name": "Dunlop"
}];

// generate <thead> tag
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}


function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector('table');
let data = Object.keys(persons[0])

generateTable(table, persons);
generateTableHead(table, data);
