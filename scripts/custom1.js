function prepareColorMixture(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("colormixture")) return false;
	

	var cmixture = document.getElementById("colormixture");
	var links = cmixture.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this);
			
			
		}
	}
}

function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");

	//if(!placeholder.nodeName != "IMG") return true;
	placeholder.setAttribute("src",source);

	

	

	if(!document.getElementById("description")) return false;

	/*if(whichpic.getAttribute("title")){
		var text = whichpic.getAttribute("title");
	}else{
		var text = " ";
	}*/
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	//alert(description.childNodes[0].nodeValue);
	/*if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}*/
	
	description.firstChild.nodeValue = text;

	return false;
}
/*
function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	//alert(body_element.childNodes.length);
}
*/

//window.onload = prepareColorMixture;


function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		

		}
	}
}

addLoadEvent(prepareColorMixture;


















