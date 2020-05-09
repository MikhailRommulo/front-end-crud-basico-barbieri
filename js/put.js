function enablePut(product) {
    visibleForm()

    document.querySelector('#fdescricao').value = product.descricao

    document.querySelector('#funidade').value = product.unidade

    document.querySelector('#fpreco').value = product.preco

    document.querySelector('#fsaldo').value = product.saldo

    document.querySelector('#fcodigo').value = product.codigo

    btnSend.innerText = "Alterar"
    btnSend.setAttribute(`onclick`, `putOne()`)

    formResu.innerText = ''
}

function putOne() {

    var formDesc = document.querySelector('#fdescricao').value

    var formUnid = document.querySelector('#funidade').value

    var formPrec = document.querySelector('#fpreco').value

    var formSald = document.querySelector('#fsaldo').value

    var codigo = document.querySelector('#fcodigo').value


   
    var body = {
        descricao: formDesc, 
        unidade: formUnid, 
        preco: parseFloat(formPrec).toFixed(2), 
        saldo: parseFloat(formSald).toFixed(2)
    }

    axios.put(`${url}/${codigo}`, body)
        .then(function (response) {
            console.log(response)
            formResu.innerText = `Produto alterado!`
        })
        .catch(function (error) {
            console.log(error)
        })
}