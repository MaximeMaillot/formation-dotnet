export function askUserInput(msg, type = "string") {
    let input = prompt(msg)
    if (type == "int") {
        input = parseInt(input)
        if (typeof input != "number") {
            throw new Error
        }
    } else if (type == "float") {
        input = parseFloat(input)
        if (typeof input != "number") {
            throw new Error
        }
    }
    return input
}

export function showDataInDiv(divId, data) {
    // get a div ID and show data instead of using console.log()
}