// Submit your application button modal

let modal = document.getElementById('simpleModal');

let modalBtn = document.getElementById('modalBtn');

let closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

function openModal(){
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display = 'none';
}

function outsideClick(e){
	if(e.target == modal){
		modal.style.display = 'none';
	}
}

// FAQ modal link



// Application rate counter

let counter = document.getElementById('counter').getContext('2d');
let no = 0;
let pointToFill = 4.72;
let canvasWidth = counter.canvas.width;
let canvasHeight = counter.canvas.height;
let diff;

function fillCounter(){
	diff =((no/100) * Math.PI*2*10)

	counter.clearRect(0,0,canvasWidth,canvasHeight);

	counter.lineWidth = 13;

	counter.fillStyle = '#000000';

	counter.strokeStyle = '#073c77';

	counter.textAlign = 'center';

	counter.font = "29px monospace";

	counter.fillText(no+'%',100,110);

	counter.beginPath();
	counter.arc(100,100,90,pointToFill,diff/10+pointToFill);

	counter.stroke();

	if(no >= 87)
	{
		clearTimeout(fill);
	}
	no++;
}

let fill = setInterval(fillCounter,50);

// Calculator tabs

var tabButtons =  document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode){
	tabButtons.forEach(function(node){
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	tabButtons[panelIndex].style.backgroundColor = colorCode;
	tabButtons[panelIndex].style.color = "white";
	tabPanels.forEach(function(node){
		node.style.display = "none";
	});
	tabPanels[panelIndex].style.display = "block";
	tabPanels[panelIndex].style.backgroundColor = colorCode;
}

showPanel(0, '#f44336');






