<?php

    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "phplogin";

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db);
    
    $Email = $_POST['email'];
    $Password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE email ='$Email' AND password = '$Password'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    if($Email =="" && $Password==""){
        header('location:login.html');
    }

    if($row['email'] == $Email && $row['password'] == $Password){
        echo "Hoşgeldiniz g201210011. Giriş başarılı.";
        header( "refresh:3;url=http://127.0.0.1:5500/HTML%20Dosyasi/anasayfa.html" ); 
    }else{
        echo "<script>alert('Email ya da şifre hatalı')</script>";
        echo "<script>location.replace('login.html')</script>";
    }

?>