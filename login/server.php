<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "register_db";

    //create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    //check connection
    if($conn->connect_error){
        die("Connection Failed: " . $conn->connect_error);
    }else{
        echo "Successfully Connected";
    }

?>