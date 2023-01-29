let myTable = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let myTr = document.createElement('tr');

    for (let j = 1; j <= 10; j++) {
        let myTd = document.createElement('td');
        myTd.innerText = j + i * 10;
        myTr.append(myTd);
    }
    myTable.append(myTr);
}

document.body.appendChild(myTable);