document.getElementsByTagName('button')[0].onclick = function () {
    console.log(666)
    let xhr = new XMLHttpRequest();
    xhr.open('get','./1.json?id='+Math.random());
    xhr.onreadystatechange = function(){
        console.log(666)
    }
    xhr.send();
}