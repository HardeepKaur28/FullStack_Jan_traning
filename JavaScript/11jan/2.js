// console.log(this);
// console.log(window);
// console.log(document);//web page pr result check kr skte h.
// console.log(window.document);
// console.dir(window.document);

//select element using get element by id
//js is case-sensitive :

// console.log(document.getElementById('hello'));
// console.dir(document.getElementById('hello'));
const h1 = document.getElementById('hello');
console.log(h1);
h1.style.color = 'green';
h1.style.padding ='23px';
h1.style.border ='2px solid pink';
h1.style.textAlign = 'center';
h1.style.backgroundImage = 'url(./istockphoto-1459328810-612x612.jpg)'
// h1.style.backgroundColor ='green';

//get elemwnt using a query selector: select the class element 
const hh1 = document.querySelector('a');
console.log(hh1);
hh1.style.color = 'green';

//change text :
//textContent : gives the content :
const heading = document.getElementById('hello');
console.log(heading.textContent);

//change text using textcontent: 
heading.textContent = 'Hello javaScript';
console.log(heading.textContent);

const heading2 = document.getElementById('wlc');
heading2.style.color = 'rgb(9, 9, 121)';
heading2.style.marginLeft = '44px';
heading2.style.marginTop = '30px'

//get and set attribute : 
const link1 = document.querySelector('a');
// console.log(link1);
console.log(link1.getAttribute('href'));//link is separate 


const input1 = document.querySelector('input');
console.log(input1.getAttribute('type'));//type : text
input1.setAttribute('type','number');//set input type textto number 
console.log(input1.getAttribute('type'));
input1.setAttribute('placeholder','Enter your age');
input1.setAttribute('min','5');
input1.setAttribute('max','100');
input1.style.width = '150px';
input1.style.marginLeft = '30px'

//set attribute :
link1.setAttribute('href' ,'https://react.dev/');
console.log(link1.getAttribute('href'));

//Method 1 : get multiple element using get element by className: retun : HTML Collection
//Method 2 : get multiple element using get element by Query selectorAll: return nodeList : using . for class 

// const navItem = document.getElementsByClassName('nav-item');
// console.log(navItem);
// console.log(Array.isArray(navItem));//false

//iterate HTML Collection using a simple loop : 
//Html Collection and NodeList : 
//array like object --> indexing , length properities.

// for(let i=0;i<navItem.length;i++){
//     console.log(navItem[i].textContent);
// }

const newNavItem = document.querySelectorAll('.nav-item');
console.log(newNavItem);

// for(let i=0;i<newNavItem.length;i++){
//         console.log(newNavItem[i].textContent);
//     }

//multiple element color change
  
//    for(let i=0;i<newNavItem.length;i = i+2){
//         const newItem = newNavItem[i];
//         newItem.style.color = 'red';
//         newItem.style.backgroundColor = 'pink';
//         newItem.style.textDecoration = 'none';
        
//     }

// multiple elment usinf for of loop:
for( i of newNavItem){
    console.log(i);
    i.style.color = 'red';
    i.style.backgroundColor = 'pink';
    i.style.textDecoration = 'none';
    i.style.marginLeft= '200px';
    i.style.marginTop = '20px';
    // i.style.border = '2px solid black';
    i.style.borderRadius = '30px';
}

//inner Html : 
const innerContext = document.querySelector('.head');
innerContext.innerHTML = '<h1>Hii , Araya </h1>';
innerContext.innerHTML += '<p>see you soon </p>'
innerContext.innerHTML += '<button>bye</button>';

