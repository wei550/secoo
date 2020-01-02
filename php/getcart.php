<?php
include "conn.php";
    $name=$_GET["userid"];
    $result=$conn->query("select usercart from secoouser where userid='$name'");  
    $arrdata=array();
    for($i=0;$i<$result->num_rows;$i++){
    $arrdata[$i]=$result->fetch_assoc();
    }
    echo json_encode($arrdata);
?>