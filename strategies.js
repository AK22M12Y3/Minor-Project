// Function to trigger the file input click event
function triggerFileUpload() {
    document.getElementById('fileUploadInput').click();
}

// Function to handle file selection and upload
function handleFileSelection(event) {
    const file = event.target.files[0];
    const fileInfoDiv = document.getElementById('fileInfo');
    
    if (file) {
        // Check if file size is less than or equal to 10MB (10 * 1024 * 1024 bytes)
        const maxFileSize = 10 * 1024 * 1024; // 10 MB in bytes

        if (file.size > maxFileSize) {
            // Show error message if file size exceeds the limit
            fileInfoDiv.innerHTML = `<strong>Error:</strong> File size exceeds 10MB. Please upload a smaller file.`;
            return; // Stop further processing
        }

        // Display file details
        fileInfoDiv.innerHTML = `
            <strong>File Uploaded:</strong> ${file.name} <br>
            <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB <br>
            <strong>Type:</strong> ${file.type || 'Unknown'}
        `;

        // Upload the file to the server
        uploadFile(file);
    } else {
        fileInfoDiv.innerHTML = '';  // Clear file info if no file is selected
    }
}

// Function to upload the file to the server
function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);  // Make sure 'file' matches the field name in the server

    // Upload the file to the server (replace localhost if needed)
    fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then((data) => {
        if (data.message) {
            alert(data.message);  // Show success message
        }
    })
    .catch((error) => {
        console.error("Error uploading file:", error);
        alert("Failed to upload the file.");
    });
}

// Event listener for file input change
document.getElementById("fileUploadInput").addEventListener("change", handleFileSelection);
