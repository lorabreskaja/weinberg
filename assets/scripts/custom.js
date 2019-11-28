// Submit your application button modal

let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalBtn');
let closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(event){
	event.preventDefault();
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

let link = document.getElementById('simpleLink');
let modalFaq = document.getElementById('modalFaq');
let closeFaq =document.getElementsByClassName('closeFaq')[0];

modalFaq.addEventListener('click', openFaq);
closeFaq.addEventListener('click', closeFaqModal);
window.addEventListener('click', randomClick);

function openFaq(event){
	event.preventDefault();
	link.style.display = 'block';
}

function closeFaqModal(){
	link.style.display = 'none';
}

function randomClick(e){
	if(e.target == link){
		link.style.display = 'none';
	}
}

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
	counter.lineWidth = 13; // blue stroke width
	counter.fillStyle = '#000000'; //black text
	counter.textAlign = 'center';
	counter.font = "40px monospace"; // text size
	counter.beginPath();
	counter.arc(100,100,85,0,2 * Math.PI);
	counter.strokeStyle = '#e00b42';
	counter.stroke();
	counter.beginPath();
	counter.fillText(no+'%',100,110);
	counter.strokeStyle = '#073c77';
	counter.arc(100,100,85,pointToFill,diff/10+pointToFill);
	counter.stroke();

	if(no >= 87)
	{
		clearTimeout(fill);
	}
	no++;
}

let fill = setInterval(fillCounter,50);

// Calculator tabs

let tabButtons =  document.querySelectorAll(".tabContainer .buttonContainer button");
let tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex,colorCode){
	tabButtons.forEach(function(node){
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	tabButtons[panelIndex].style.backgroundColor = "";
	tabButtons[panelIndex].style.color = "#e00b42";
	tabPanels.forEach(function(node){
		node.style.display = "none";
	});
	tabPanels[panelIndex].style.display = "block";
	tabPanels[panelIndex].style.backgroundColor = "";
}

showPanel(0, '#f44336');

// FAQ accordion 

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// Burger menu

function toggleClass(){
	let menu = document.querySelector(".mainMenu");
	menu.classList.toggle("toggleCls");
}

let hamburger = document.querySelector(".hamIcon");
hamburger.addEventListener("click", toggleClass);

// Calculator mortgage

let slider = document.getElementById("myLoanRange");
let output = document.getElementById("loans");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

let slider2 = document.getElementById("myPeriodRange");
let output2 = document.getElementById("period");
output2.innerHTML = slider2.value;


slider2.oninput = function() {
  output2.innerHTML = this.value;
}

function computeLoan(){
	let months = slider2.value * 12;
	let interest = (slider.value * (2 * .01)) / months;
	let payment = ((slider.value / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "$" + payment;
}

computeLoan();
