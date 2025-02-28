document.addEventListener("DOMContentLoaded", function () {
    updateUserInfo();
});

// Function to update user details on profile
function updateUserInfo() {
    document.getElementById("user-name")?.textContent = localStorage.getItem("username") || "User";
    document.getElementById("user-credits")?.textContent = localStorage.getItem("credits") || 20;
}

// User Registration
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    if (!newUsername || !newPassword) {
        alert("Please fill all fields.");
        return;
    }

    if (localStorage.getItem("registeredUser") === newUsername) {
        alert("Username already exists! Please choose a different one.");
        return;
    }

    // Save user data (For now, using localStorage. Replace with API call later)
    localStorage.setItem("registeredUser", newUsername);
    localStorage.setItem("registeredPassword", newPassword);

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to login page
});

// User Login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const storedUser = localStorage.getItem("registeredUser");
    const storedPass = localStorage.getItem("registeredPassword");

    if (username === storedUser && password === storedPass) {
        alert("Login successful!");
        localStorage.setItem("username", username);
        localStorage.setItem("credits", 20);
        window.location.href = "profile.html"; // Redirect to user profile
    } else {
        alert("Invalid username or password! Please try again.");
    }
});

// Function to preview uploaded text file
function previewFile() {
    const fileInput = document.getElementById("document-upload");
    const filePreview = document.getElementById("file-preview");

    const file = fileInput.files[0];
    if (file && file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = function (event) {
            filePreview.value = event.target.result;
        };
        reader.readAsText(file);
    } else {
        alert("Please upload a valid text (.txt) file.");
        fileInput.value = ""; // Reset file input
    }
}

// Function to simulate document upload
function uploadDocument() {
    let credits = parseInt(localStorage.getItem("credits") || 20);

    if (credits > 0) {
        alert("Document uploaded and scanned successfully!");
        localStorage.setItem("credits", credits - 1);
        updateUserInfo(); // Refresh credits display
        window.location.href = "profile.html"; // Redirect back to profile after upload
    } else {
        alert("You have no credits left! Please request more credits.");
    }
}

// Function to request more credits
function requestCredits() {
    alert("Request sent to admin for additional credits.");
}

// Function to logout
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("credits");
    window.location.href = "login.html";
}

// Admin Login
document.getElementById("adminLoginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const adminUsername = document.getElementById("admin-username").value.trim();
    const adminPassword = document.getElementById("admin-password").value.trim();

    if (adminUsername === "admin" && adminPassword === "admin123") {
        alert("Admin Login Successful!");
        window.location.href = "admin-admin_dashboard"; // Redirect to admin panel
    } else {
        alert("Invalid credentials! Try again.");
    }
});
// Function to preview uploaded text file
function previewFile() {
    const fileInput = document.getElementById("document-upload");
    const filePreview = document.getElementById("file-preview");

    const file = fileInput.files[0];
    if (file && file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = function (event) {
            filePreview.value = event.target.result;
        };
        reader.readAsText(file);
    } else {
        alert("Please upload a valid text (.txt) file.");
        fileInput.value = ""; // Reset file input
    }
}
// Function to simulate document upload and redirect to scan.html
function uploadDocument() {
    let fileInput = document.getElementById("document-upload");
    
    if (!fileInput.files.length) {
        alert("Please upload a document before scanning.");
        return;
    }

    let credits = parseInt(localStorage.getItem("credits") || 20);

    if (credits > 0) {
        window.alert("Document uploaded successfully! Redirecting to scan page...");
        localStorage.setItem("credits", credits - 1);
        window.location.href = "scan.html"; // Redirect to scan page
    } else {
        alert("You have no credits left! Please request more credits.");
    }
}
  