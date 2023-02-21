/**
 * Append a child of type childType to the parent Element with options
 * @param {Element} parent element you want to append a child to
 * @param {String} childType type of the child
 * @param {Object} options choose the options you want to add to that element
 * {
 * 'id' @type {String} to set a specific id to the element
 * 'text' @type {String} to add an innerHTML
 * 'style' @type {String} to add inline style to the element
 * 'className' @type {Array} to add classes
 * 'alert' @type {String} to transform the element into an alert with 'alert' as the danger level
 * 'eventHandler' @type {Object} add an event to the element
 *    {
 *      'event' @type {string} Type of the event
 *      'fn' @type {function} Name of the function
 *      'parameters' @type {Array} List of parameters
 *    }
 *  }
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
    if ("eventHandler" in options && options.eventHandler != null) {
        switch (options.eventHandler.event) {
            case "onclick":
                child.onclick = function () { options.eventHandler.fn(...options.eventHandler.parameters) }
                break;
            default:
                break;
        }
    }
    parent.appendChild(child);
    return child
}

export { appendChildToElement }