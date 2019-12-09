<?php session_start(); ?>

<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Weinberg Capital</title>
		<link rel="stylesheet" href="assets/css/style.css">
		<script src="https://kit.fontawesome.com/513e464a7f.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<header class="site-header" id="myHeader">
			<div class="container flex-container">
				<div class="logo flex-container">
					<a href="index.php"> <img src="assets/images/logo.svg" alt="Weinberg"></a>
					<p>capital</p>
				</div>
				
				<nav class="main-nav">
					<div class="hamIcon">
					<h1>&#9776;</h1>
					</div>
				 <ul class="flex-container mainMenu">
					<li><a href="index.php">Home</a></li>
					<li><a id="scrollToFaq" href="#">FAQ</a></li>
					<li><a id="scrollToApply" href="#">Apply</a></li>
				</ul>
				</nav> 
			</div>
		</header>

		<section>
			<div class="container flex-container hero">
				<div class="hero-section">
					<h1>Mortgage, leasing, and personal loans at your fingertips.</h1>
					<div class="flex-container calc">
						<button class="scrollToCalculator">Calculate</button>
						<p>your monthly instalment</p>
					</div>
				</div>
				<div class="hero-section">
					<img src="assets/images/opti/house.png" alt="House">
				</div>
			</div>
		</section>

		<section class="column-back">
			<div class="container column-main">
				<p>Our services</p>
				<i class="fas fa-chevron-down"></i>
			</div>
			<div class="container flex-container column-main">
				<div class="column">
					<img src="assets/images/opti/mortgage.png" alt="Mortgage">
					<h3>Mortgage</h3>
					<div class="flex-container">
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<i class="fas fa-home"></i>
					</div>
				</div>
				<div class="column">
					<img src="assets/images/opti/car.png" alt="Leasing">
					<h3>Leasing</h3>
					<div class="flex-container">
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<i class="fas fa-car"></i>
					</div>
				</div>
				<div id="scrollToFaq2" class="column">
					<img src="assets/images/opti/bags.png" alt="Personal loans">
					<h3>Personal loans</h3>
					<div class="flex-container">
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
					<i class="fas fa-shopping-basket"></i>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="container flex-container application">
				<div class="application-one">
					<canvas height="200" width="200" id="counter"></canvas>
				</div>
				<div class="application-two">
					<h3>Industry best application success rate</h3>
					<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
					<div class="flex-container">
						<i class="fas fa-question-circle"></i>
						<a id="modalFaq" class="faqbutton scrollToCalculator2" href="#">Frequently Asked Questions</a>
						<div id="simpleLink" class="link">
							<div class="faq-content">
								<span class="closeFaq">&times;</span>
								<h2>FAQ</h2>
								<p>Learn about our services in-depth.</p>
								<button class="accordion">How the loan interest is established?</button>
								<div class="panel">
  								<p>Annual interest is established individually taking into consideration the assessment of your financial capacity, the loan amount, your own portion of funds, the loan market situation and also on periodicity and types of our services used by you.</p>
								</div>

								<button class="accordion">What minimum portion of own funds is required for obtaining a mortgage loan?</button>
								<div class="panel">
  								<p>If you are willing to acquire a dwelling, your own portion of funds may not be lower than 15 percent of the real estate price or value (depends on the lower of the two).</p>
								</div>
								<button class="accordion">What is the amount of a loan?</button>
								<div class="panel">
  								<p>The loan amount may be individually identified after assessment of the family’s financial potential to repay the loan.</p>
								</div>
								<button class="accordion">Who may apply for a loan?</button>
								<div class="panel">
  								<p>Every permanent resident of Lithuania, who is at least 18 years of age and receives regular income.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div class="grey-line">
				<div></div>
			</div>
			<div class="container flex-container calculator">
				<div class="calculator-one">
					<h1>Calculate your monthly instalment</h1>
					<p>Use the mortgage loan calculator to calculate a loan instalment that you could pay the bank every month without difficulty and consider the risk of decreased income.</p>
				</div>
					<div class="calculator-two tabContainer">
						<div class="buttonContainer">
							<button onclick="showPanel(0, '#ffffff')">Mortgage</button>
							<button onclick="showPanel(1, '#ffffff')">Leasing</button>
							<button onclick="showPanel(2, '#ffffff')">Personal</button>
						</div>
						<div class="tabPanel">
							<div class="slidecontainer">
							<div class="flex-container">
							<p>Amount</p>
							<p class="readouts">$ <span id="loans"></span></p>
							</div>
  							<input type="range" min="1" max="100000" value="20000" class="slider" id="myLoanRange" onchange="computeLoan()">
							</div>

							<div class="slidecontainer">
							<div class="flex-container">
							<p>Period</p>
							<p class="readouts"><span id="period"></span> years</p>
							</div>
  							<input type="range" min="1" max="30" value="20" class="slider2" id="myPeriodRange" onchange="computeLoan()">
							</div>

							<div class="flex-container">
								<p>Interest rate</p>
								<p class="readouts">3.0%</p>
							</div>

							<div class="flex-container">
								<p>Monthly payment</p>
								<p id ="payment"></p>
							</div>
						</div>
						<div class="tabPanel">
							<div class="slidecontainer">
							<div class="flex-container">
							<p>Amount</p>
							<p class="readouts">$ <span id="loans2"></span></p>
							</div>
  							<input type="range" min="1" max="25000" value="8000" class="slider3" id="myLoanRange2" onchange="computeLoan2()">
							</div>

							<div class="slidecontainer">
							<div class="flex-container">
							<p>Period</p>
							<p class="readouts"><span id="period2"></span> years</p>
							</div>
  							<input type="range" min="1" max="5" value="3" class="slider4" id="myPeriodRange2" onchange="computeLoan2()">
							</div>

							<div class="flex-container second">
								<p>Interest rate</p>
								<p class="readouts">4.0%</p>
							</div>

							<div class="flex-container second">
								<p>Monthly payment</p>
								<p id ="payment2"></p>
							</div>
						</div>

						<div class="tabPanel">
							<div class="slidecontainer">
							<div class="flex-container">
							<p>Amount</p>
							<p class="readouts">$ <span id="loans3"></span></p>
							</div>
  							<input type="range" min="1" max="10000" value="1000" class="slider5" id="myLoanRange3" onchange="computeLoan3()">
							</div>

							<div class="slidecontainer">
							<div class="flex-container">
							<p>Period</p>
							<p class="readouts"><span id="period3"></span> years</p>
							</div>
  							<input type="range" min="1" max="5" value="4" class="slider6" id="myPeriodRange3" onchange="computeLoan3()">
							</div>

							<div class="flex-container">
								<p>Interest rate</p>
								<p class="readouts">12.0%</p>
							</div>

							<div class="flex-container">
								<p>Monthly payment</p>
								<p id ="payment3"></p>
							</div>
						</div>
					</div>
				</div>
		</section>

		<section class="back">
			<div class="container flex-container apply">
				<h2 id="scrollToApply2">Ready to get started?</h2>
				<button id="modalBtn" class="button submit">Submit your application</button>
				<div id="simpleModal" class="modal">
					<div class="modal-content">
						<span class="closeBtn">&times;</span>
						<?php require_once "registration/register.php"; ?>
					</div>
				</div>
			</div>
		</section>

		<footer class="site-footer">
			<div class="container flex-container">
				<div class="address">
					<h4>Weinberg Capital, Inc.</h4>
					<p>234 W 42nd St, New York, NY 10036</p>
					<p>United States</p>
					<ul class="flex-container">
                  		<li><a href="https://www.linkedin.com/in/larisabreskaja/"><i class="fab fa-linkedin"></i></a></li>
                  		<li><a href="https://facebook.com/"><i class="fab fa-facebook-square"></i></a></li>
                  		<li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                	</ul>
					<a href="index.php"> <img src="assets/images/capital2.png" alt="Weinberg footer logo"></a>
					<p id="copyright">Copyright © 2020 Weinberg Capital, Inc.</p>
				</div>
				<div class="map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.254314528276!2d-73.9910278495863!3d40.75643094273268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854a9d7a5cd%3A0xf7a2e7477b505499!2s234%20W%2042nd%20St%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2slt!4v1574255366619!5m2!1sen!2slt"></iframe>
				</div>
			</div>
		</footer>
	
		<script type="text/javascript" src="assets/scripts/custom.js"></script>
	</body>
</html>
