<!--<?php
	
	$link = mysqli_connect("localhost","PRIVATE","PASSWORD","PRIVATE");
	

	
	if (mysqli_connect_error()){
		echo "Could not connect to the database";
	}
		
	$query = "UPDATE `Users` SET `email`= 'nothere@aol.com' WHERE `name`='Mom' LIMIT 1";
	mysqli_query($link, $query);
	
	$query = "SELECT * FROM Users";
	
	if ($result = mysqli_query($link, $query)){
		$row = mysqli_fetch_array($result);
		
		print_r($row);
		
	}
	
?>-->

<?php
	
	session_start();
	
	$link = mysqli_connect("localhost","PRIVATE","PASSWORD","PRIVATE");
	
	
	if (mysqli_connect_error()){
		echo "Could not connect to the database";
	}

	
	if($_POST['submit']=="Sign Up") {
		
		//error validations
		if (!$_POST['email']) $error.="<br /> Please enter your email";
			else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) $error.="<br />Please enter a valid email";			
			
		if(!$_POST['password']) $error.="<br /> Please enter your password";
			else {
		
				if (strlen($_POST['password']) <8) $error.="<br /> Please enter a password with at least 8 characters";
				if(!preg_match('`[A-Z]`', $_POST['password'])) $error.="<br /> Please include at least one capital letter in your password";
			}
				
		if ($error) echo "There were error(s) in your signup details:".$error;
		//connecting to the database and checking to see if the email that was entered has already been used
		else{
			
			
			if (mysqli_connect_error()){
				echo "Could not connect to the database";
			}
			
			$query = "SELECT * FROM `Users` WHERE email='".mysqli_real_escape_string($link, $_POST['email'])."'";
			
			$result = mysqli_query($link, $query);
			
			$results = mysqli_num_rows($result);
			
			if ($results) echo "That email address is taken. Were you looking to log in?";
			//if everything checks out, sign up the user with the given credentials and give them an id
			else{
				
				$query = "INSERT INTO `Users` (`email`, `password`) VALUE('".mysqli_real_escape_string($link, $_POST['email'])."', '".md5(md5($_POST['email']).$_POST['password'])."')";
				
				mysqli_query($link, $query);
				
				echo "You've been signed up!";
				
				$_SESSION['id']=mysqli_insert_id($link);
				
				
			}
				
			
		}
								
			
			
			
	}
	
	if($_POST['submit']=="Log In"){
		
		
		//connect to database and retrieve user info	
		$query = "SELECT * FROM `Users` WHERE email='".mysqli_real_escape_string($link, $_POST['loginemail'])."' AND password='".md5(md5($_POST['loginemail']).$_POST['loginpassword'])."'LIMIT 1";
		
		$result = mysqli_query($link, $query);
		
		$row = mysqli_fetch_array($result);
		
		if($row){
			
			$_SESSION['id']=$row['id'];
			
			print_r($_SESSION);
			
		} else{
			
			echo "Your email/password was incorrect. Please try again.";
			
		}
	}	
	
?>

<h5> V.1.0 </h5>

<form method="post">
	
	<input type="email" name="email" id="email" placeholder="Email" value="<?php echo addslashes($_POST['email']) ?>" />
	<input type="password" name="password" placeholder="Password"/>
	<input type="submit" name="submit" value="Sign Up" />
	
</form>

<form method="post">
	
	<input type="email" name="loginemail" id="loginemail" placeholder="Email" value="<?php echo addslashes($_POST['email']) ?>" />
	<input type="password" name="loginpassword" placeholder="Password"/>
	<input type="submit" name="submit" value="Log In" />
	
</form>