function listAll(){
    axios.get(url)
    .then(function (response) {
    console.log(response)
    listProducts(response.data)
    })
    .catch(function (error) {
    console.log(error)
    });
}

function getProduct(){

    var inCodigo = document.querySelector('#codigo').value

    axios.get(`${url}/${inCodigo}`)
    .then(function (response) {
    console.log(response)
    oneProduct(response.data)
    })
    .catch(function (error) {
    console.log(error)
    });
}

function listProducts(lista) {
    var table = document.querySelector('table')
    table.innerHTML = initTable()

    for(let p of lista) {
        let row = document.createElement('tr')
        for(let key in p){
            let cell = document.createElement('td')
            cell.innerText = p[key]
            row.appendChild(cell)
        }
        let cellE = document.createElement('td')
        let btnE = document.createElement('button')
        btnE.innerText = 'excluir'
        btnE.setAttribute('onclick', `deleteOne(${p.codigo})`)
        cellE.appendChild(btnE)
        row.appendChild(cellE)

        let cellA = document.createElement('td')
        let btnA = document.createElement('button')
        btnA.innerText = 'alterar'
        btnA.setAttribute('onclick', `enablePut(${JSON.stringify(p)})`)
        cellA.appendChild(btnA)
        row.appendChild(cellA)

        table.appendChild(row)
    }
}

function oneProduct(product){
    var table = document.querySelector('table')
    table.innerHTML = initTable()

    let row = document.createElement('tr')

    for(let key in product){
        let cell = document.createElement('td')
        cell.innerText = product[key]
        row.appendChild(cell)
    }
    let cellE = document.createElement('td')
    let btnE = document.createElement('button')
    btnE.innerText = 'excluir'
    btnE.setAttribute('onclick', `deleteOne(${product.codigo})`)
    cellE.appendChild(btnE)
    row.appendChild(cellE)

    let cellA = document.createElement('td')
    let btnA = document.createElement('button')
    btnA.innerText = 'alterar'
    btnA.setAttribute('onclick', `enablePut(${JSON.stringify(product)})`)
    cellA.appendChild(btnA)
    row.appendChild(cellA)

    table.appendChild(row)
}

function initTable(){
    tableHTML = "<table>"+
                "<tr>"+
                    "<th>Código</th>"+
                    "<th>Descrição</th>"+
                    "<th>Preço</th>"+
                    "<th>Saldo</th>"+
                    "<th>Unidade</th>"+
                    "<th></th>"+
                    "<th></th>"+
                "</tr>"+
            "</table>"
    return tableHTML
}
