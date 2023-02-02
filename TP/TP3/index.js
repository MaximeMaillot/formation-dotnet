document.body.onload = initiateOnLoad;

function initiateOnLoad() {
    createRow("container", ["retrait", "withdraw", "agios"])
    createRetrait();
    createWithdraw();
    createAgios();
}

function createRow(divId, rowsId) {
    let div = document.getElementById(divId)
    rowsId.forEach(rowId => {
        let child = document.createElement("div");
        child.setAttribute("class", "col");
        child.setAttribute("id", rowId)
        div.appendChild(child)
    });
}

function createRetrait() {
    let container = document.getElementById("retrait")

    let soldField = document.createElement("input")
}

function createWithdraw() {
    let container = document.getElementById("withdraw")

}

function createAgios() {
    let container = document.getElementById("agios")

}