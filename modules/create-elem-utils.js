const createHTMLElem = (tag, classAdd, parentNode) => {
    const tagName = document.createElement(tag);
    tagName.classList.add(classAdd);
    parentNode.appendChild(tagName);
    return tagName;
};

const createImgElem = (classAdd, src, parentNode) => {
    const tagName = document.createElement("img");
    tagName.classList.add(classAdd);
    tagName.src = src;
    parentNode.appendChild(tagName);
    return tagName;
};

const createPElem = (classAdd, text, parentNode) => {
    const tagName = document.createElement("p");
    tagName.classList.add(classAdd);
    tagName.appendChild(document.createTextNode(text));
    parentNode.appendChild(tagName);
    return tagName;
};

export { createHTMLElem, createImgElem, createPElem };
