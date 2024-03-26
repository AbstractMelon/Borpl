document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");
    const uploadButton = document.getElementById("uploadButton");
    const uploadStatus = document.getElementById("uploadStatus");

    uploadButton.addEventListener("click", function() {
        const file = fileInput.files[0];
        if (!file) {
            uploadStatus.textContent = "Please select a file.";
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Upload failed.");
            }
            return response.text();
        })
        .then(data => {
            uploadStatus.textContent = "File uploaded successfully.";
        })
        .catch(error => {
            uploadStatus.textContent = "An error occurred during upload.";
            console.error("Error during upload:", error);
        });
    });
});
