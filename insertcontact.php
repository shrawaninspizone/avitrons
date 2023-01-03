<?php
$con = mysqli_connect("localhost", "root", "","avitron"); // Establishing Connection with Server
// Selecting Database from Server
if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];
if($name !='' && $email !=''){
//Insert Query of SQL
$query = "insert into contact(`name`, `email`, `phone`, `subject`, `message`) values ('$name', '$email', '$phone', '$subject', '$message')";

mysqli_query($con,$query);
echo "<br/><br/><span>Data Inserted successfully...!!</span>";
}
else{
echo "<p>Insertion Failed <br/> Some Fields are Blank....!!</p>";
}
}
mysqli_close($con); // Closing Connection with Serveron
?>
