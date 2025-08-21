<?php
include '../php/config.php';

$sql = "SELECT * FROM admissions ORDER BY submitted_at DESC";
$result = $conn->query($sql);

$admissions = [];

while ($row = $result->fetch_assoc()) {
    $admissions[] = [
        "id" => $row['id'],
        "name" => $row['name'],
        "dob" => $row['dob'],
        "gender" => $row['gender'],
        "class" => $row['class'],
        "father_name" => $row['father_name'],
        "mother_name" => $row['mother_name'],
        "contact" => $row['contact'],
        "address" => $row['address'],
        "submitted_at" => $row['submitted_at']
    ];
}

header('Content-Type: application/json');
echo json_encode(["data" => $admissions]);
?>