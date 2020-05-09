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
        let cell = document.createElement('td')
        let btn = document.createElement('button')
        btn.innerText = 'excluir'
        btn.setAttribute('onclick', `deleteOne(${p.codigo})`)
        cell.appendChild(btn)
        row.appendChild(cell)
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
