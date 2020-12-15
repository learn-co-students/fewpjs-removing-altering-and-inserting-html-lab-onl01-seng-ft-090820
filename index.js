// Write your code here!
document.querySelector('main').remove()

let newHeader = document.createElement('h1')
//newHeader.nodeName('h1#victory')
//let newHeader = document.getElementById("h1#victory");
//newHeader.innerHTML = 

//newHeader = document.querySelector("victory");
//newHeader.innerHTML = 'VALERIA is the champion'

newHeader.setAttribute("id","victory");
//newHeader = document.getElementById("victory");

//let newHeader = document.getElementsByTagName("H1")[0].setAttribute("victory")

newHeader.innerHTML = "<h1>VALERIA is the champion</h1>";
document.body.appendChild(newHeader)