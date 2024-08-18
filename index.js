let body = document.body;
let myH1 = document.createElement("h1");
let myP = document.createElement("p")
let myA = document.createElement('a')

myP.appendChild(myA)
myH1.appendChild(myP)
body.appendChild(myH1);

