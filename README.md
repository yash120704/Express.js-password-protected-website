# Express.js-password-protected-website

---

📌 Project Description

This project is a simple Express.js password-protected website.

The user is asked to enter a password on the homepage (index.html).

If the password is correct (alphahunter), the user is redirected to a secret page (secret.html).

If the password is incorrect, they remain on the homepage.

The project demonstrates the use of Express.js middleware, body-parser, and basic authentication handling.

---

## 🚀 Features

- Password authentication using middleware.
  
- Secure password check inside backend (not client-side).
  
- Separate public pages:
  
  - `index.html` → Password input page.
    
  - `secret.html` → Hidden secrets page.
    
- Built with **Node.js + Express.js**.

---

## 🛠️ Tech Stack

- Node.js
  
- Express.js
  
- body-parser
  
- HTML5

---

## 📂 Project Structure

project-folder/

│── public/

│ ├── index.html

│ ├── secret.html

│── solution.js

│── package.json

│── README.md

│── .gitignore

---


## ⚙️ Installation & Setup

1. Clone the repository:
   
   ```bash
   
   git clone https://github.com/your-username/secrets-website.git
   cd secrets-website

2. Install dependencies:

   npm install
   
4. Start the server:

   node index.js
   
6. Open in browser:

   http://localhost:3000

---

🔑 Password

The default password is:
alphahunter

---

📸 Demo

<img width="1182" height="531" alt="image" src="https://github.com/user-attachments/assets/087e89c1-efbb-42fa-87a7-7e54ed298a92" />

<img width="912" height="427" alt="image" src="https://github.com/user-attachments/assets/af11908a-eb25-4863-a2b9-174c5d9a6d79" />

<img width="1181" height="542" alt="image" src="https://github.com/user-attachments/assets/e2a8bca9-2306-4609-87c3-cc9234f3c511" />

---

📌 Future Improvements

Use sessions instead of a global variable for authentication.

Add multiple users with different passwords.

Improve UI with CSS/Bootstrap/Tailwind.

---

👨‍💻 Author

Yash Kashyap

🌐 GitHub Profile - https://github.com/yash120704


