// <?php
    $servername = "localhost";
    $DBusername = "root";
    $DBpassword = "";
    $DBname = "vbucks";

    $conn = mysqli_connect($servername, $DBusername, $DBpassword, $DBname);
    if (!$conn){
        die("Connection Failed: ". mysqli_connect_error());
    }