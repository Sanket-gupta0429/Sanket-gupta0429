<?php
$firstName = $_POST('firstname');
$lastName = $_POST('lastname');
$phone = $_POST('phone');
$email= $_POST('email');
$Address= $_POST('Address');
$intrest = $_POST('intrest');



$conn = new mysqli('localhost','root',"",' connect');
if($conn->connect_error){
    die('Connection Faild :' .$conn->connect_error);
}else{
    $stmt=$conn->prepare("insert into Details(firstName,lastName,phone,email,Address,intrest)
    values(?,?,?,?,?,?)");
    $stmt ->bind_param("ssiss",$firstName ,$lastName ,$phone,$email,$Address,$intrest);
    $stmt-> execute();
    echo "Registraion Succesfully...";
    $stmt->close();
    $conn->close();
}


?>