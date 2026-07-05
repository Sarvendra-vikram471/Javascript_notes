// create element
// function addElement(content) {
//   let id = document.createElement("li");
//   id.innerHTML = content;

//   let parent = document.querySelector("ul");
//   parent.appendChild(id);
// }

// addElement("TypeScript");
// addElement("GO");
// addElement("Rust");

// let id1=document.createElement('li');
// id1.innerHTML="TypeScript";

// let id2=document.createElement('li');
// id2.innerHTML="GO";

// let parent=document.getElementById('third');
// parent.append(id1,id2);

//--------------------------------------------------------------------------------------
// create textnode

// let element=document.createTextNode("Happy Coding");
// let parent=document.getElementById("root");
// parent.append(element);

//-------------------------------create attribute node-----------------------------------
// let element1=document.createAttribute('id');
// element1.value="list2";
// let parent=document.querySelector('ul');
// parent.children[1].setAttributeNode(element1);
// let element2=document.createAttribute('class');
// element2.value="list3_c";
// parent.childNodes[3].setAttributeNode(element2);

// let element3=document.createAttribute('id');
// element3.value='list4';
// let children=document.querySelectorAll('li');
// children[5].setAttributeNode(element3);

//--------------------------access attribute-----------------------------------------------
// let element = document.getElementById('third');
// console.log(element.getAttribute("style"));

// element.setAttribute("custom","list_type");
// element.setAttribute('class',"list_attribute");
// element.removeAttribute("custom");

//---------------------------add node to DOM------------------------------------------------
let parent=document.querySelector('ul');

let element=document.createElement('li');        // Way-1
element.innerHTML="C";
parent.prepend(element);

let element2=document.createElement('li');      // Way-2
element2.innerHTML="Rust";
let list3_element=parent.children[2];
parent.insertBefore(element2,list3_element);

let element3=document.createElement('li');     // Way-3
element3.innerHTML="Go";
parent.replaceChild(element3,element2);

let list5_element=parent.children[5];           // Way-4
list5_element.innerHTML +="<li>Rust</li>";  

let element5=document.createElement("div");
element5.innerHTML="Top 7:";
parent.insertAdjacentElement("beforebegin",element5);

let element6=document.createElement("div");
element6.innerHTML="Happy Coding";
parent.insertAdjacentElement("afterend",element6);