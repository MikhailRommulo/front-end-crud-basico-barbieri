function visibleForm() {
    var areaPost = document.querySelector('.cadastro-alteracao')

    areaPost.setAttribute('style',
        'display: flex;'+
        'align-items: center;'+
        'justify-content: center;'
    )
}

function closeForm() {
    var areaPost = document.querySelector('.cadastro-alteracao')

    areaPost.setAttribute('style', 'display: none')
}

function postProduct() {

  var formDesc = document.querySelector('#fdescricao').value

  var formUnid = document.querySelector('#funidade').value

  var formPrec = document.querySelector('#fpreco').value

  var formSald = document.querySelector('#fsaldo').value
   
    var body = {
        descricao: formDesc, 
        unidade: formUnid, 
        preco: parseFloat(formPrec).toFixed(2), 
        saldo: parseFloat(formSald).toFixed(2)
    }

    axios.post(url, body)
      .then(function (response) {
        console.log(response)
        formResu.innerText = `Produto cadastrado!`
      })
      .catch(function (error) {
        console.log(error)
      })
}
