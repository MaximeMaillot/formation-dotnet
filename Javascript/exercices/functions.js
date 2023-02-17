/**
 * Append a child of type childType to the element Element with specified text, id and classes
 * @param {Element} element 
 * @param {String} childType 
 * @param {String} text 
 * @param {String} id 
 * @param {[String]} className 
 * @returns {Element}
 */
function appendChildToElement(element, childType, text = null, id = null, className = [], style = null) {
    let child = document.createElement(childType);
    if (className.length > 0) {
        child.setAttribute("class", ...className)
    }
    if (id != null) {
        child.setAttribute("id", id);
    }
    if (text != null) {
        child.innerHTML = text;
    }
    if (style != null) {
        child.style.cssText = style
    }
    element.appendChild(child);
    return child
}

/**
 * Create an alert of level type as first child of the parent
 * @param {Element} parent 
 * @param {String} text 
 * @param {String} type 
 * @returns {Element}
 */
function createAlertDiv(parent, text, type = "danger") {
    let alertDiv = document.createElement("div");
    let className = "alert "
    if (type == "danger") {
        className += "alert-danger "
    }
    alertDiv.className = className
    alertDiv.setAttribute("role", "alert");
    alertDiv.innerHTML = text;
    parent.insertBefore(alertDiv, parent.firstChild);
    return alertDiv
}

export { appendChildToElement, createAlertDiv }