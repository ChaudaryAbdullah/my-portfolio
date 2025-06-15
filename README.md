**React Portfolio Showcase**
This is a portfolio website built with React. It features a clean, responsive layout with light/dark mode support, an image carousel for each project, and a modal for detailed previews.
✨ Features

- 🎨 Dark Mode Toggle (with localStorage support)
- 🖼️ Project cards with multiple images (carousel slider)
- 🔍 Modal popup with image slider and description
- 📁 Clean and modular folder structure
- ✅ Responsive design

📁 Folder Structure

Portfolio/
├── public/                     # Static assets (optional)
├── src/
│   ├── assets/
│   │   └── files/images/       # All project images
│   ├── pages/
│   │   └── Home.jsx            # Main page layout
│   ├── services/
│   │   └── ThemeProvider.jsx   # Dark/light mode context
│   ├── styles/
│   │   ├── Home.css
│   │   └── App.css
│   ├── ProjectCard.jsx         # Carousel project preview
│   └── ProjectModal.jsx        # Modal for enlarged view
├── App.jsx                     # App entry
└── README.md

🚀 Getting Started
1. Clone the Repo
git clone https://github.com/yourusername/portfolio.git
cd portfolio
2. Install Dependencies
npm install
3. Start the Development Server
npm run dev   # for Vite
npm start     # for Create React App
📸 Image Setup
Place all your images in:

src/assets/files/images/

Then reference them either by importing:

import gymImage from "../assets/files/images/gym.jpg";

Or dynamically for carousels:

project.images = [
  require("../assets/files/images/gym1.jpg"),
  require("../assets/files/images/gym2.jpg"),
];

🌓 Theme Provider
Implemented using React Context API:

- Saves theme mode in localStorage
- Toggles CSS class on <body> to apply theme
- Usage:

import { useTheme } from "./services/ThemeProvider";

const { darkMode, toggleTheme } = useTheme();

💡 Additional Features

- Carousel navigation (left/right buttons)
- Modal overlay stops body scrolling
- Click outside to close modal
- Clean separation of concerns

📷 Screenshots

💻 Light Mode
🌙 Dark Mode

(Note: Screenshots should be included manually or linked to hosted images)

📦 Build for Production
npm run build
🔧 Tech Stack

- React (Functional Components + Hooks)
- JavaScript (ES6+)
- CSS3 (Modular)
- Vite or Create React App
- Context API

🧑‍💻 Author
Abdullah Shakir
📄 License
This project is open-source and available under the MIT License.
