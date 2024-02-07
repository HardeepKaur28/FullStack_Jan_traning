//Dom traversing : 
//understand Dom tree , node treeem element
//and sibling node , text node (white-space)

const rootNode = document.getRootNode()
console.log(rootNode);

// const rootchild = rootNode.childNodes;
// console.log(rootchild);//doctype to remove kiya h

// console.log(rootchild[0]);

// console.log(rootchild.length);

//Child inside  html : 

const html = rootNode.childNodes;
console.log(html);

console.log("html Childs : ");
const htmlChilds = html[0].childNodes;
console.log(htmlChilds);

console.log("inside html childs inside child :");
const htmlChild1 = htmlChilds[0].childNodes;
console.log(htmlChild1);//head

const htmlChild2 = htmlChilds[1].childNodes;
console.log(htmlChild2);//text

const htmlChild3 = htmlChilds[2].childNodes;
console.log(htmlChild3);//body

const headSibling = htmlChild1[0].nextSibling;
console.log(headSibling);