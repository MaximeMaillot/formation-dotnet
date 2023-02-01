document.body.onload = addElement;

function addElement() {
    let div = document.getElementById("row")
    console.log(div)
    const para = document.createElement("button");
    const node = document.createTextNode("add a text");
    para.appendChild(node)
    div.appendChild(para)
}