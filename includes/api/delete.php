<?php


 require 'db.php';


 $id  = $_POST["id"];


 $sql = "DELETE FROM usersailment WHERE user_id = '".$id."'";


 $result = $mysqli->query($sql);


 echo json_encode([$id]);


?>