/**
 * Append a child of type childType to the parent Element with options
 * 'id' @type {String} to set a specific id to the element
 * 'text' @type {String} to add an innerHTML
 * 'style' @type {String} to add inline style to the element
 * 'className' @type {Array} to add classes
 * 'alert' @type {String} to transform the element into an alert with 'alert' as the danger level
 * @param {Element} parent 
 * @param {String} childType 
 * @param {Object} options 
 * @returns {Element}
 */
function appendChildToElement(parent, childType, options = {}) {
    let child = document.createElement(childType);
    if ("id" in options && options.id != null) {
        child.setAttribute("id", options.id);
    }
    if ("text" in options && options.text != null) {
        child.innerHTML = options.text;
    }
    if ("style" in options && options.style != null) {
        child.style.cssText = options.style
    }
    if ("className" in options && options.className.length > 0) {
        child.classList.add(...options.className)
    }
    if ("alert" in options && options.alert != null) {
        let alertClass = []
        alertClass.push("alert")
        switch (options.alert) {
            case "danger":
                alertClass.push("alert-danger")
                break;
            default:
                alertClass.push("alert-info")
                break;
        }
        child.classList.add(...alertClass)
        parent.insertBefore(child, parent.firstChild);
        return child
    }
    if ("function" in options && options.function != null) {
        switch (options.function.event) {
            case "onclick":
                child.onclick = options.function.fn
                break;
            default:
                break;
        }
    }
    parent.appendChild(child);
    return child
}

export { appendChildToElement }