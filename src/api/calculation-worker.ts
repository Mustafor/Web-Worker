onmessage = (event) => {
    const base = event.data
    let result = 0

    for(var i = Math.pow(base, 7); i > 0; i--) {
        result += Math.atan(i) * Math.tan(i)
    }
    postMessage(result)
}
