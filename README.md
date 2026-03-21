
# 📁 CodeStash — Personal Code Snippet Manager

A full-stack web application built for developers
who are tired of losing their best code snippets forever.

---

## 🔗 Links

- **Live Demo:** https://code-stash-six.vercel.app
- **GitHub:** https://github.com/bytesbydev/codestash

---


## ✨ Features

- 🔐 Email/Password and Google Authentication
- 💾 Save snippets by language and tags
- 🔍 Search and filter snippets instantly
- 🎨 Syntax highlighted code preview
- 📋 One click copy to clipboard
- ✏️ Edit and delete snippets
- 📱 Fully responsive on all devices
- ⚡ Real-time sync with Firebase

---

## 🧰 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React.js |
| Build Tool | Vite |
| Database | Firebase Firestore |
| Authentication | Firebase Auth |
| Styling | CSS |
| Deployment | Vercel |

---

## 📁 Project Structure

```
codestash/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.css
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.css
│   │   ├── SnippetCard.jsx
│   │   ├── SnippetCard.css
│   │   ├── SnippetModal.jsx
│   │   └── SnippetModal.css
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Signup.jsx
│   │   └── Dashboard.jsx
│   │   └── Dashboard.css
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useSnippets.js
│   ├── firebase/
│   │   └── config.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── vercel.json
├── index.html
└── package.json
```

---

## ⚙️ Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/bytesbydev/codestash.git
cd codestash
```

**2. Install dependencies**
```bash
npm install
```

**3. Create a `.env` file in root folder**
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**4. Setup Firebase**
- Go to firebase.google.com
- Create a new project
- Enable Firestore Database
- Enable Authentication
  - Email/Password
  - Google
- Copy config to `.env` file

**5. Run the project**
```bash
npm run dev
```

**6. Open in browser**
```
http://localhost:5173
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_FIREBASE_API_KEY` | Firebase API Key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage Bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase App ID |

---

## 🚀 Deployment

**Deploy to Vercel:**

1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repo
4. Add all environment variables
5. Click Deploy

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is open source and available
under the [MIT License](LICENSE).

---

## 👤 Author

**Devendra Rawat**
- GitHub: [@bytesbydev](https://github.com/bytesbydev)
- LinkedIn: [Devendra Rawat](https://linkedin.com/in/3devendra-rawat-15a52b293)
---

⭐ If you found CodeStash useful please
give it a star on GitHub!
```
---
