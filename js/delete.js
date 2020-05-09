function deleteOne(codigo) {
    console.log(codigo)
    axios.delete(`${url}/${codigo}`)
        .then(function (response) {
            console.log(response)
            listAll()
        })
        .catch( function (error) {
            console.log(error)
        })
}