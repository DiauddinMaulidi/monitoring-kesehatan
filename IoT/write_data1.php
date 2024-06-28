<?php
	require("koneksi1.php");
    //Variabel database
    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $dbname = "apk_sehat";
 
    // $conn = mysqli_connect("$servername", "$username", "$password","$dbname");
 
    // Prepare the SQL statement
    if (!$koneksi1) { 
		die("Connection failed: " . mysqli_connect_error()); 
	}

	echo "Koneksi ke database berhasil"; 

	if(isset($_POST["temperature"]) && isset($_POST["humidity"]) && isset($_POST["bodyTemperature"])) {

		$roomTemperature = $_POST["temperature"];
		$roomHumidity = $_POST["humidity"];
		$bodyTemperature = $_POST["bodyTemperature"];

		$sql = "REPLACE INTO suhu (id, temperature, humidity, bodyTemperature) VALUES (1, '$roomTemperature', '$roomHumidity', '$bodyTemperature')";

		if (mysqli_query($koneksi1, $sql)) { 
			echo "\nNew record created successfully"; 
		} else { 
			echo "Error: " . $sql . "<br>" . mysqli_error($koneksi1); 
		}
}

?>