/*$('.nav-icon').click(function(){
    $('#nav-links').toggleClass("responsive");
    return false;
});
*/

const navToggle = document.querySelector("#nav-links");

function reveal(){
	
	navToggle.classList.toggle("responsive");
}

navToggle.onclick = reveal;