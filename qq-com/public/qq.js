console.log(1)

myFriends.onclick = () => {
    axios.get('/qqJson.js')
        .then(response => console.log(response.data)
            , error => console.log(error))
}