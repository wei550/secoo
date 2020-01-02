<?php
include "conn.php";
    $pidstr=$_GET["pidstr"];
    $pidarr=explode(',',$pidstr);
    $arrdata=array();
    for($i=0;$i<count($pidarr);$i++){
        $pid=$pidarr[$i];
        $result=$conn->query("select * from secooproduct where pid='$pid'");
        $arrdata[$i]=$result->fetch_assoc();
    }
    echo json_encode($arrdata);
?>