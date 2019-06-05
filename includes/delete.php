
<?php
$connect = mysqli_connect("localhost", "root", "", "jarvis");
if(isset($_POST["id"]))
{
 $query = "DELETE FROM usersailment WHERE id = '".$_POST["id"]."'";
 if(mysqli_query($connect, $query))
 {
  echo 'Data Deleted';
 }
}
?>
