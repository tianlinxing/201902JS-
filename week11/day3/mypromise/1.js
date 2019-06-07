let p = new Promise(function (res, rej) {
    rej(123)
    rej()
})
p.then((data) => {
    console.log(qqq)
    return 333
}, (err) => {
    console.log(err)
}).then((data) => {
    console.log(data)
}, () => {

})
