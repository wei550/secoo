<?php
include "conn.php";
if(isset($_POST["submit"])){
    $user=$_POST["username"];
    $pass=sha1($_POST["password"]);
    $conn->query("insert secoouser values('$user','$pass','')");
}else{
    exit("非法操作");
}
header("location:../src/login.html");
?>