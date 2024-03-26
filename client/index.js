document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code for the index page goes here
    console.log("Index page loaded!");

    // Example: Fetch recent uploads and display them
    const recentUploadsList = document.getElementById("recent-uploads");

    fetch("http://localhost:5000/recentUploads")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch recent uploads.");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(upload => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = upload.url;
                link.textContent = upload.fileName;
                listItem.appendChild(link);
                recentUploadsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching recent uploads:", error);
        });
});
