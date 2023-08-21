<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get user input
    $experienceRating = isset($_POST["experience_rating"]) ? $_POST["experience_rating"] : "";
    $additionalComments = isset($_POST["additional_comments"]) ? $_POST["additional_comments"] : "";
    $uploadedFileName = isset($_FILES["proof_file"]["name"]) ? $_FILES["proof_file"]["name"] : "";

    // Display the submitted information
    echo "<h2>Review Submission</h2>";
    echo "<p><strong>Experience Rating:</strong> $experienceRating</p>";
    echo "<p><strong>Additional Comments:</strong> $additionalComments</p>";
    
    if ($uploadedFileName) {
        echo "<p><strong>Uploaded Proof File:</strong> $uploadedFileName</p>";
    } else {
        echo "<p><strong>No proof file uploaded.</strong></p>";
    }

} else {
    echo "<p>No data submitted.</p>";
}
?>