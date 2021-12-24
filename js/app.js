/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/**
 * Define Global Variables
 * 
*/
// get the navbar element
var navBar = document.getElementById("navbar__list");

// number of sections in the navbar
var count = document.getElementsByClassName("landing__container").length;

// the nnumber of the active section
var activeSection = 0;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function hideNavBar(){
    setTimeout(()=>{
        navBar.style.display="none";
    }, 10000)
}

function activateNavBar(){
    document.querySelectorAll("a").forEach(function(section, ind) {
        if (!(section.classList.contains("btnAnchor"))){
            if (ind === activeSection){
                section.classList.remove('inActiveAnchor');
                section.classList.add('activeAnchor');
            }else {
                section.classList.remove('activeAnchor');
                section.classList.add('inActiveAnchor');
            }
        }
    })
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (var i = 0; i < count; i++){
    var anchor = document.createElement("a");
    anchor.classList.add("inActiveAnchor");
    anchor.href = "#section"+(i+1);
    var sec = document.createElement("LI");
    anchor.innerHTML = "Section " + (i+1);
    sec.appendChild(anchor);
    navBar.appendChild(sec);
}

// Add class 'active' to section when near top of viewport
window.onscroll = function (){
    navBar.style.display = 'block';
    document.querySelectorAll("Section").forEach(function (section, index) {
        if (section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top < 400){
            section.classList.add("your-active-class");
            activeSection = index;
        }else{
            section.classList.remove("your-active-class");
        }
    })

    hideNavBar();
    activateNavBar();
}


// Scroll to anchor ID using scrollTO event
/*
 *Added the id of the section as href of the anchor and added element in the css file in
    html object to make it scroll smoothly
 */

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// ability to hide or show the text in each section
document.querySelectorAll("h2").forEach(function(section) {
    section.onclick = () =>{
        section.classList.toggle("inActive");
        var para = section.nextElementSibling;
        if (para.style.display == "none") {
            para.style.display = "block";
        } else {
            para.style.display = "none";
        }
    }
})
