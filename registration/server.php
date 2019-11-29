<?php

$name = "";
$surname = "";
$email = "";
$errors = array(); 


$db = mysqli_connect('localhost', 'root', '', 'applicants');

// Register user

if (isset($_POST['reg_user'])) {

  $name = mysqli_real_escape_string($db, $_POST['name']);
  $surname = mysqli_real_escape_string($db, $_POST['surname']);
  $email = mysqli_real_escape_string($db, $_POST['email']);

  if (empty($name)) { array_push($errors, "Name is required"); }
  if (empty($surname)) { array_push($errors, "Surname is required"); }
  if (empty($email)) { array_push($errors, "Email is required"); }

  $user_check_query = "SELECT * FROM users WHERE name='$name' OR surname='$surname' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { 
    if ($user['name'] === $name) {
      array_push($errors, "name already exists");
    }

    if ($user['surname'] === $surname) {
      array_push($errors, "surname already exists");
    }

    if ($user['email'] === $email) {
      array_push($errors, "email already exists");
    }
  }

  if (count($errors) == 0) {

  	$query = "INSERT INTO users (name, surname, email) 
  			  VALUES('$name', '$surname', '$email')";
  	mysqli_query($db, $query);
  	$_SESSION['name'] = $name;
  	$_SESSION['success'] = $success;
    
  }
  else {
    $_SESSION['failure'] = $errors;
  }
  
  //header('Location: http://'.$_SERVER['HTTP_HOST'].'/weinberg/index.php');
}



