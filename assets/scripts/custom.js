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

// Application rate counter

var counter = document.getElementById('counter').getContext('2d');
var no = 0;
var pointToFill = 4.72;
var cw = counter.canvas.width;
var ch = counter.canvas.height;
var diff;

function fillCounter(){
	diff =((no/100) * Math.PI*2*10)

	counter.clearRect(0,0,cw,ch);

	counter.lineWidth = 15;

	counter.fillStyle = '#fff';

	counter.strokeStyle = '#F5E0A9';

	counter.textAlign = 'center';

	counter.font = "25px monospace";

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

var fill = setInterval(fillCounter,50);




