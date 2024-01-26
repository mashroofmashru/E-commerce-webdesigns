var toggle = document.getElementById("toggle");
var container = document.getElementById("slidebar");

toggle.onclick = function(){
	container.classList.toggle('active');
}