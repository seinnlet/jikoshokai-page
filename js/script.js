// JavaScript Document

// to close mobile menu when menu item is pressed

let nav_item = document.getElementsByClassName("nav-item");
let i = nav_item.length;

while(i--)	// because getElementsByClassName returns array
	nav_item[i].addEventListener("click", removeChecked);

function removeChecked() {
	document.getElementById("toggle-menu").checked = false;
}


// to add navigation active, inspired from https://codepen.io/dbilanoski/pen/LabpzG

// get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", addNavActive);

function addNavActive() {
  
  // get current y scroll position
  let scrollY = window.pageYOffset;
  
  // get height, top and ID values for each section
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
  // check position to add or remove active
  if(sectionId != "banner"){
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active");
    }
   } 
  });

}


// animation
AOS.init({
	duration: 1200,
	once: true,
});