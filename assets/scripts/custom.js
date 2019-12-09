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

// FAQ modal slink

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
	tabPanels[panelIndex].style.backgroundColor = colorCode;
}

showPanel(0, '#ffffff');

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

// Calculator sliders

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

let slider3 = document.getElementById("myLoanRange2");
let output3 = document.getElementById("loans2");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

let slider4 = document.getElementById("myPeriodRange2");
let output4 = document.getElementById("period2");
output4.innerHTML = slider4.value;


slider4.oninput = function() {
  output4.innerHTML = this.value;
}

let slider5 = document.getElementById("myLoanRange3");
let output5 = document.getElementById("loans3");
output5.innerHTML = slider5.value;

slider5.oninput = function() {
  output5.innerHTML = this.value;
}

let slider6 = document.getElementById("myPeriodRange3");
let output6 = document.getElementById("period3");
output6.innerHTML = slider6.value;


slider6.oninput = function() {
  output6.innerHTML = this.value;
}

// Calculator loan compute

function computeLoan(){
	let months = slider2.value * 12;
	let interest = (slider.value * (3 * .01)) / months;
	let payment = ((slider.value / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "$" + payment;
}

computeLoan();


function computeLoan2(){
	let months = slider4.value * 12;
	let interest = (slider3.value * (4 * .01)) / months;
	let payment2 = ((slider3.value / months) + interest).toFixed(2);
	payment2 = payment2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment2').innerHTML = "$" + payment2;
}

computeLoan2();

function computeLoan3(){
	let months = slider6.value * 12;
	let interest = (slider5.value * (12 * .01)) / months;
	let payment3 = ((slider5.value / months) + interest).toFixed(2);
	payment3 = payment3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment3').innerHTML = "$" + payment3;
}

computeLoan3();

// Header sticky fix

window.onscroll = function() {myFunction()};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Burger menu

function toggleClass(){
	let menu = document.querySelector(".mainMenu");
	menu.classList.toggle("toggleCls");
}

let hamburger = document.querySelector(".hamIcon");
hamburger.addEventListener("click", toggleClass);

//Menu items and calculate button smooth scroll

function smoothScroll(target, duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime){
		if (startTime === null)	startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d){
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b; 
	}

	requestAnimationFrame(animation);
}

let scrollToFaq = document.querySelector('#scrollToFaq');
scrollToFaq.addEventListener('click', function(){
	smoothScroll('#scrollToFaq2', 1000);
});

let scrollToApply = document.querySelector('#scrollToApply');
scrollToApply.addEventListener('click', function(){
	smoothScroll('#scrollToApply2', 1000);
});

var scrollToCalculator = document.querySelector('.scrollToCalculator');
scrollToCalculator.addEventListener('click', function(){
	smoothScroll('.scrollToCalculator2', 1000);
});

