<?php
include "conn.php";
    $userid=$_POST["userid"];
    $usercart=$_POST["usercart"];
    $conn->query("update secoouser set usercart='$usercart' where userid='$userid'");
?>