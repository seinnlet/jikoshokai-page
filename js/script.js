// JavaScript Document

// to close mobile menu when menu item is pressed
let nav_item = document.getElementsByClassName("nav-item");
let i = nav_item.length;

while(i--)	// because getElementsByClassName returns array
	nav_item[i].addEventListener("click", removeChecked);

function removeChecked() {
	document.getElementById("toggle-menu").checked = false;
}