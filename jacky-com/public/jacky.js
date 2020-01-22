
const jsonp = (url) => {
    return new Promise((resolve, reject) => {
        const random = Math.random()
        window[random] = data => {
            resolve.call(null, data)
        }
        const script = document.createElement('script')
        script.src = `${url}?callback= ${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)
    })
}


myFriends.onclick = () => {
    // axios.get('http://qq.com:8888/qq.json')
    //     .then(response => console.log(response)
    //         , error => console.log(error))
    jsonp('http://qq.com:8888/qqJson.js')
        .then(data => console.log(data),
            error => console.log(error)
        )
}

