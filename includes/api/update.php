<?php


  require 'db.php';


  $id  = $_POST["id"];
  $post = $_POST;


  $sql = "UPDATE usersailment SET ailmentName = '".$post['title']."'
    ,ailmentText = '".$post['description']."' 
    WHERE user_id = '".$id."'";


  $result = $mysqli->query($sql);


  $sql = "SELECT * FROM usersailment WHERE id = '".$id."'"; 


  $result = $mysqli->query($sql);


  $data = $result->fetch_assoc();


  echo json_encode($data);


?>