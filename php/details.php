<?php
include "conn.php";
if(isset($_GET["productid"])){
    $pid=$_GET["productid"];
    $result=$conn->query("select * from secooproduct where pid='$pid'");
    $arrdata=array();
    for($i=0;$i<$result->num_rows;$i++){
    $arrdata[$i]=$result->fetch_assoc();
    }
    echo json_encode($arrdata);
}else{
    exit("非法操作");
}
?>