<?php
include '../../php/config.php';
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$class = $_POST['class'];
$father = $_POST['father_name'];
$mother = $_POST['mother_name'];
$contact = $_POST['contact'];
$address = $_POST['address'];
$submitted_at = date("Y-m-d H:i:s");


 $uploadDir = __DIR__ . '/../../uploads/';

// Handle image upload
$imagePath = '';
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $imageTmp = $_FILES['image']['tmp_name'];
    $imageName = uniqid() . '_' . $_FILES['image']['name'];
    $uploadDir = '../uploads/';
    if (!is_dir($uploadDir)) mkdir($uploadDir);
    move_uploaded_file($imageTmp, $uploadDir . $imageName);
    $imagePath = $uploadDir . $imageName;
}

$stmt = $conn->prepare("INSERT INTO admissions_data (first_name, last_name, dob, gender, class, father_name, mother_name, contact, address, submitted_at, image, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pending')");
$stmt->bind_param("sssssssssss", $first_name, $last_name, $dob, $gender, $class, $father, $mother, $contact, $address, $submitted_at, $imagePath);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>