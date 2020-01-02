<?php
include "conn.php";
if(isset($_POST['username']) && isset($_POST['password'])){
    $name=$_POST["username"];
    $password=$_POST["password"];
    $result=$conn->query("select userpsd from secoouser where userid='$name'");
    $arr=$result->fetch_assoc();
    if($arr["password"]==$password){
        echo true;
    }else{
        echo false;
    }
}else{
    echo("非法操作");
}