/**
 * Append a child of type childType to the element Element with specified text, id and classes
 * @param {Element} element 
 * @param {String} childType 
 * @param {String} text 
 * @param {String} id 
 * @param {[String]} className 
 * @returns {Element}
 */
function appendChildToElement(element, childType, text = null, id = null, className = []) {
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
    element.appendChild(child);
    return child
}

export { appendChildToElement }