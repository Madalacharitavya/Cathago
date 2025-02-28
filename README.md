Credit-Based Document Scanning System

Overview:

The Credit-Based Document Scanning System is a self-contained application that allows users to upload and scan documents for similarity detection. Each user receives 20 free scans per day, with the option to request additional credits from an admin. The system also includes an analytics dashboard for tracking scans and credit usage.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Features:

1. User Authentication & Role Management

User Registration & Login (Username & Password-based authentication)

User Roles: Regular Users & Admins

Profile Section: Displays available credits, scan history, and credit requests

2. Credit System

Users get 20 free scans per day (auto-reset at midnight)

Additional credits require an admin approval request

Each document scan deducts 1 credit from the balance

If out of credits, users must wait for the daily reset or get admin approval

3. Document Scanning & Matching

Users can upload plain text files

The system compares the uploaded document with existing stored documents

Returns matching results based on text similarity algorithms

Displays credits available after every scan

AI-powered document matching (Bonus): Uses OpenAI, Gemini, or DeepSeek for semantic similarity

4. Smart Analytics Dashboard (Admin Panel)

Track daily scans per user

Identify common scanned document topics

View top users by scan count & credit usage

Generate credit usage statistics for admins

Tech Stack:

Frontend:

HTML, CSS, JavaScript (No frameworks)

Backend:

Python (Flask/Django) or Node.js (Express) (No external libraries)

Database:

SQLite or JSON files (for lightweight storage)

File Storage:

Documents stored locally

Authentication:

Username-password login with hashed passwords

Text Matching Logic:

Custom Levenshtein distance algorithm & word frequency analysis

AI-based similarity detection (Optional)


Setup Instructions:

1. Install Dependencies

For Python (Flask):

pip install flask

For Node.js (Express):

npm install express

2. Run the Server

For Python:

python app.py

For Node.js:

node server.js

3. Open in Browser

Register/Login to access the platform

Upload a file for document scanning

Check matching results & available credits

Request extra credits if needed

Screenshots:
![WhatsApp Image 2025-02-28 at 15 16 14_8f1f3464](https://github.com/user-attachments/assets/0a13c2a8-c38d-4c62-8db7-168d4dc42d40)
![WhatsApp Image 2025-02-28 at 15 16 14_96ac2e81](https://github.com/user-attachments/assets/d4f84652-64d5-4e88-97c5-22bd50cb39af)
![WhatsApp Image 2025-02-28 at 15 16 14_2170ae74](https://github.com/user-attachments/assets/aba0f54b-95fa-4632-a3c2-bd3ef4ab7437)
![WhatsApp Image 2025-02-28 at 15 16 15_1e37d766](https://github.com/user-attachments/assets/19fbb8f0-4670-42dd-9e8c-7b3a73c50506)
![WhatsApp Image 2025-02-28 at 15 16 15_3ff3bec9](https://github.com/user-attachments/assets/69f803e9-4500-4c30-8e40-ecefc942793a)
![WhatsApp Image 2025-02-28 at 15 16 15_91448410](https://github.com/user-attachments/assets/3d00240a-2372-4c27-87df-94719a7444e6)





Demo Video

🎥 Watch the demo (Uploaded separately)

Future Enhancements

Automated Credit Reset at midnight

User Activity Logs for tracking scans & requests

Admin Dashboard UI for easier credit approvals

Download Scan History as a text report

Multi-User Support for real-world deployment

Submission Guidelines

GitHub Repository: Contains source code & setup instructions

Screenshots: Uploaded as part of the submission

Demo Video: Showcasing full functionality

License

This project is licensed under the MIT License.



