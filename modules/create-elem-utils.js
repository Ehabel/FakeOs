const createHTMLElem = (tag, classAdd, parentNode) => {
    const tagName = document.createElement(tag);
    tagName.classList.add(classAdd);
    parentNode.appendChild(tagName);
    return tagName;
};

const createHTMLElemMultiClass = (tag, classAdd, classTwo, parentNode) => {
    const tagName = document.createElement(tag);
    tagName.classList.add(classAdd);
    tagName.classList.add(classTwo);
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

const createImgElemMultiClass = (classAdd, classTwo, src, parentNode) => {
    const tagName = document.createElement("img");
    tagName.classList.add(classAdd);
    tagName.classList.add(classTwo);
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

const createBtnElem = (classAdd, text, parentNode) => {
    const tagName = document.createElement("button");
    tagName.classList.add(classAdd);
    tagName.appendChild(document.createTextNode(text));
    parentNode.appendChild(tagName);
    return tagName;
};

export {
    createHTMLElem,
    createHTMLElemMultiClass,
    createImgElem,
    createImgElemMultiClass,
    createPElem,
    createBtnElem,
};
