<?php
include "conn.php";
if(isset($_POST["username"])){
    $name=$_POST["username"];
    $result=$conn->query("select * from secoouser where userid='$name'");  
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}else{
    exit("非法操作");
}
?>