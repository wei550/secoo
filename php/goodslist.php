<?php
include "conn.php";
if(isset($_POST["ptype"])){
    $ptype=$_POST["ptype"];
    $result=$conn->query("select * from secooproduct where ptype='$ptype'");
    $arrdata=array();
    for($i=0;$i<$result->num_rows;$i++){
    $arrdata[$i]=$result->fetch_assoc();
    }
    echo json_encode($arrdata);
}else{
    exit("非法操作");
}
?>