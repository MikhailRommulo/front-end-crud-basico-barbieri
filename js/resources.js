var btnTodos = document.querySelector('#btn-todos')
btnTodos.onclick = () => listAll()

var btnOne = document.querySelector('#btn-codigo')
btnOne.onclick = () => getProduct()

var btnPost = document.querySelector('#btn-cadastro')
btnPost.onclick = () => visibleForm()

var btnSend = document.querySelector('#btn-send')
btnSend.onclick = () => postProduct()

var btnClose = document.querySelector('#btn-close')
btnClose.onclick = () => closeForm()

var formResu = document.querySelector('#form-resultado')

// var url = 'http://localhost:8801/produtos'

var url = 'https://crud-basico-barbieri.herokuapp.com/produtos'