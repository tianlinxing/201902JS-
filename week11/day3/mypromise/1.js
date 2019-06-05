let p = new Promise(function (res,rej) {
    res(123)
    rej()
})
p.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})