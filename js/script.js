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
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
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