<?php include('server.php') ?>

  <h2>Application</h2>
  <p class="inner-p">Submit your application today</p>

<form method="POST" id="main_contact_form" class="contact__form">
  <?php include('errors.php') ?>
 
<div class="form-group">
<input type="text" name="name" id="name" class="form-control" placeholder="First name" value="<?php echo $name; ?>">
</div>

<div class="form-group">
<input type="text" name="surname" id="surname" class="form-control" placeholder="Last name" value="<?php echo $surname; ?>">
</div>

<div class="form-group">
<input type="text" name="email" id="email" class="form-control" placeholder="Email address" required="required" value="<?php echo $email; ?>">
</div>

<button type="submit" id="successBtn" class="submitButton successOn" name="reg_user">Submit your application</button>

</form>

